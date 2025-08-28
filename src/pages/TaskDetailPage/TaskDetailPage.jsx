// src/pages/TaskDetailPage/TaskDetailPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { sectionData } from "../../data/focals";
import TaskDescription from "../../components/TaskDetailComponents/TaskDescription";
import SchoolStats from "../../components/TaskDetailComponents/SchoolStats";
import "./TaskDetailPage.css";
import TaskViewComment from "../../components/TaskDetailComponents/TaskViewComment";

const TaskDetailPage = () => {
  const { sectionId, focalId, taskId,  } = useParams();

  // 1. Find section
  const section = sectionData[sectionId];
  if (!section) {
    return <p>Section not found.</p>;
  }

  // 2. Find focal
  const focal = section.find((f) => String(f.id) === String(focalId));
  if (!focal) {
    return <p>Focal not found.</p>;
  }

  // 3. Find task
  const task = focal.documents.find((doc) => String(doc.id) === String(taskId));
  if (!task) {
    return <p>Task not found.</p>;
  }

  // 4. Grab description directly from focal
  const focalDescription = focal.description;

  return (
    <div className="task-detail-page">
      {/* Left side: Task Description */}
      <div className="task-detail-left">
        <TaskDescription
          task={task}
          focalName={focal.name}
          section={focal.section}
          description={focalDescription}
          status={task.status}
        />

        <TaskViewComment />
      </div>

      {/* Right side: Reserved for future (comments/stats) */}
      <div className="task-detail-right">
        <SchoolStats />
      </div>
    </div>
  );
};

export default TaskDetailPage;
