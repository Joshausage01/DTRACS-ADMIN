import { useMemo, useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation, useOutletContext } from "react-router-dom";
import TaskTabs from "../../../components/TaskTabs/TaskTabs";
import { createSlug } from "../../../utils/idGenerator";
import config from "../../../config";
import "./TaskPage.css";

const TaskPage = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [selectedSort, setSelectedSort] = useState("newest");
  const [tasks, setTasks] = useState({});
  const [loading, setLoading] = useState(true);
  // Optional: keep error for logging, but don't render UI
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  
  const currentUser = useMemo(() => {
    const item = sessionStorage.getItem("currentUser");
    return item ? JSON.parse(item) : null;
  }, []);

  const { selectedFocal } = useOutletContext();

  const isOfficeWithoutSection = currentUser?.role === "office" && (
    !currentUser.section_designation ||
    currentUser.section_designation === "Not specified" ||
    currentUser.section_designation === "" ||
    currentUser.section_designation === "NULL"
  );

  const fetchAssignmentsForTask = async (task_id, token) => {
    try {
      const response = await fetch(
        `${config.API_BASE_URL}/admin/task/assignments?task_id=${encodeURIComponent(task_id)}`,
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error(`Failed to fetch assignments for task ${task_id}: ${response.statusText}`);
      }
      const data = await response.json();
      console.log(`[API Response - Assignments for task_id: ${task_id}]`, data);

      const assignments = Array.isArray(data) ? data : [];

      const schoolsRequired = new Set();
      const schoolsSubmitted = new Set();
      const accountsRequired = [];
      const accountsSubmitted = [];

      assignments.forEach((assignment) => {
        if (!assignment.school_name || !assignment.account_name) return;

        schoolsRequired.add(assignment.school_name);

        if (assignment.status === "COMPLETE") {
          schoolsSubmitted.add(assignment.school_name);
          accountsSubmitted.push({ ...assignment, status: "COMPLETE" });
        }

        accountsRequired.push({
          ...assignment,
          status: assignment.status || "ONGOING",
        });
      });

      const schoolsRequiredArray = Array.from(schoolsRequired);
      const schoolsSubmittedArray = Array.from(schoolsSubmitted);

      return {
        schools_required: schoolsRequiredArray,
        schools_submitted: schoolsSubmittedArray,
        schools_not_submitted: schoolsRequiredArray.filter(school => !schoolsSubmitted.has(school)),
        accounts_required: accountsRequired,
        accounts_submitted: accountsSubmitted,
        accounts_not_submitted: accountsRequired.filter(acc => acc.status !== "COMPLETE"),
      };
    } catch (err) {
      console.error(`❌ Error fetching assignments for task ${task_id}:`, err);
      return {
        schools_required: [],
        schools_submitted: [],
        schools_not_submitted: [],
        accounts_required: [],
        accounts_submitted: [],
        accounts_not_submitted: [],
      };
    }
  };

  const enrichTasksWithAssignments = async (rawTasks, token) => {
    const allTasks = [];
    const taskToSectionMap = {};

    Object.entries(rawTasks).forEach(([sectionName, sections]) => {
      sections.forEach((section) => {
        section.tasklist.forEach((task) => {
          allTasks.push(task);
          taskToSectionMap[task.task_id] = { sectionName, section, task };
        });
      });
    });

    const assignmentPromises = allTasks.map((task) =>
      fetchAssignmentsForTask(task.task_id, token)
    );

    const assignmentResults = await Promise.all(assignmentPromises);

    const enrichedTasks = {};

    Object.entries(rawTasks).forEach(([sectionName, sections]) => {
      const enrichedSections = [];

      sections.forEach((section) => {
        const enrichedSection = { ...section };
        enrichedSection.tasklist = section.tasklist.map((task) => {
          const index = allTasks.findIndex(t => t.task_id === task.task_id);
          const assignmentData = index !== -1 ? assignmentResults[index] : {};
          return { ...task, ...assignmentData };
        });

        enrichedSections.push(enrichedSection);
      });

      enrichedTasks[sectionName] = enrichedSections;
    });

    return enrichedTasks;
  };

  useEffect(() => {
    if (!selectedFocal) {
      setLoading(true);
      setHasLoaded(false); // Ensure hasLoaded is true even if no focal
      return;
    }

    if (Object.keys(tasks).length > 0) {
      console.log(`[INFO] Tasks already loaded for user_id: ${selectedFocal}. Skipping refetch.`);
      setLoading(false);
      return;
    }

    const fetchAndEnrichTasks = async () => {
      try {
        setLoading(true);
        const token = currentUser?.token;

        const response = await fetch(
          `${config.API_BASE_URL}/admin/tasks/all/focal_id/?user_id=${encodeURIComponent(selectedFocal)}`,
          {
            headers: {
              Authorization: token ? `Bearer ${token}` : "",
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch tasks: ${response.statusText}`);
        }

        const rawData = await response.json();
        console.log(`[API Response - Raw Tasks for user_id: ${selectedFocal}]`, rawData);

        const groupedBySection = rawData.reduce((acc, task) => {
          const sectionName = task.section || "General";
          if (!acc[sectionName]) {
            acc[sectionName] = [
              {
                section_name: sectionName,
                section_designation: sectionName,
                tasklist: [],
              },
            ];
          }
          acc[sectionName][0].tasklist.push(task);
          return acc;
        }, {});

    const enrichedTasks = await enrichTasksWithAssignments(groupedBySection, token);

    setTasks(enrichedTasks);
    setHasLoaded(true); // Set hasLoaded to true after successful fetch
      } catch (err) {
        console.error("Error fetching and enriching tasks:", err);
        // Instead of setting an error, we'll just set empty tasks
        setTasks({});
        setHasLoaded(true);
      } finally {
        setLoading(false);
      }
    };

    fetchAndEnrichTasks();
  }, [selectedFocal, currentUser]);

  const allOffices = useMemo(() => {
    if (!tasks || typeof tasks !== 'object') return [];
    return [
      ...new Set(
        Object.values(tasks)
          .flat()
          .flatMap((section) => section.tasklist?.map((task) => task.office) || [])
      ),
    ].sort();
  }, [tasks]);

  const { upcomingTasks, pastDueTasks, completedTasks } = useMemo(() => {
    if (!tasks || typeof tasks !== 'object') {
      return { upcomingTasks: [], pastDueTasks: [], completedTasks: [] };
    }
    const upcoming = [];
    const pastDue = [];
    const completed = [];
    const now = new Date();
    Object.entries(tasks).forEach(([sectionName, sections]) => {
      if (!Array.isArray(sections)) return;
      sections.forEach((section) => {
        if (!Array.isArray(section.tasklist)) return;
        section.tasklist.forEach((task) => {
          const taskDeadline = new Date(task.deadline);
          const taskStatus = task.task_status || "ONGOING";
          const taskDataObj = {
            id: task.user_id,
            task_id: task.task_id,
            title: task.title,
            deadline: task.deadline,
            office: task.office,
            creation_date: task.creation_date,
            completion_date: task.completion_date || null,
            sectionId: sectionName,
            sectionName: sectionName,
            taskSlug: createSlug(task.title),
            creator_name: task.creator_name,
            description: task.description,
            task_status: taskStatus,
            links: task.links,
            section_designation: sectionName,
            schools_required: task.schools_required || [],
            schools_submitted: task.schools_submitted || [],
            schools_not_submitted: task.schools_not_submitted || [],
            accounts_required: task.accounts_required || [],
            accounts_submitted: task.accounts_submitted || [],
            accounts_not_submitted: task.accounts_not_submitted || [],
            originalTask: task,
          };
          if (taskStatus === "COMPLETE") {
            completed.push({
              ...taskDataObj,
              completedTime: task.completion_date || task.modified_date || task.creation_date,
            });
          } else if (taskStatus === "INCOMPLETE") {
            pastDue.push(taskDataObj);
          } else if (taskDeadline < now) {
            pastDue.push(taskDataObj);
          } else {
            upcoming.push(taskDataObj);
          }
        });
      });
    });
    return { upcomingTasks: upcoming, pastDueTasks: pastDue, completedTasks: completed };
  }, [tasks]);

  const sortTasks = (tasks, sortOption) => {
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const startOfWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay());
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    switch (sortOption) {
      case "newest":
        return [...tasks].sort((a, b) => new Date(b.creation_date) - new Date(a.creation_date));
      case "oldest":
        return [...tasks].sort((a, b) => new Date(a.creation_date) - new Date(b.creation_date));
      case "today":
        return tasks.filter((task) => {
          const taskDate = new Date(task.deadline);
          return taskDate >= startOfDay && taskDate < new Date(startOfDay.getTime() + 24 * 60 * 60 * 1000);
        });
      case "week":
        return tasks.filter((task) => {
          const taskDate = new Date(task.deadline);
          const nextWeek = new Date(startOfWeek.getTime() + 7 * 24 * 60 * 60 * 1000);
          return taskDate >= startOfWeek && taskDate < nextWeek;
        });
      case "month":
        return tasks.filter((task) => {
          const taskDate = new Date(task.deadline);
          const nextMonth = new Date(startOfMonth.getFullYear(), startOfMonth.getMonth() + 1, 1);
          return taskDate >= startOfMonth && taskDate < nextMonth;
        });
      default:
        return tasks;
    }
  };

  // Handle "no section" case
  if (isOfficeWithoutSection) {
    return (
      <div className="no-section-page">
        <div className="no-section-container">
          <h2>⏳ Section Not Assigned Yet</h2>
          <p>Your account has not been assigned to a section by the administrator.</p>
          <p>Please wait for admin approval or contact support for assistance.</p>
          <p className="note">
            <strong>Note:</strong> You will not be able to view or manage tasks until your section is assigned.
          </p>
        </div>
      </div>
    );
  }

  // ✅ NO ERROR UI — just render Outlet with possibly empty data
  return (
    <div className="task-layout">
      <TaskTabs
        selectedSort={selectedSort}
        onSortChange={setSelectedSort}
        showUpcomingIndicator={upcomingTasks.length > 0}
        showPastDueIndicator={pastDueTasks.length > 0}
        showCompletedIndicator={completedTasks.length > 0}
      />
      <Outlet
        context={{
          upcomingTasks: sortTasks(upcomingTasks, selectedSort),
          pastDueTasks: sortTasks(pastDueTasks, selectedSort),
          completedTasks: sortTasks(completedTasks, selectedSort),
          selectedSort,
          allOffices,
          selectedFocal,
          loading,
          hasLoaded,
        }}
      />
    </div>
  );
};

export default TaskPage;