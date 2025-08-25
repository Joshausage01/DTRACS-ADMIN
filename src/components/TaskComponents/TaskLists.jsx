import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, sectionId, focalId }) => {
  // Group tasks by date
  const groupedTasks = tasks.reduce((acc, task) => {
    const date = new Date(task.date);
    const key = date.toDateString(); // ensures grouping by same day
    if (!acc[key]) acc[key] = [];
    acc[key].push(task);
    return acc;
  }, {});

  return (
    <div className="task-list">
      {Object.keys(groupedTasks).map(dateKey => {
        const date = new Date(dateKey);

        // Format: Month Day, Year
        const formattedDate = date.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        });

        // Get day of week
        const dayOfWeek = date.toLocaleDateString("en-US", {
          weekday: "long",
        });

        return (
          <div key={dateKey} className="date-group">
            <h3 className="date-header">
              {formattedDate}{" "}
              <span style={{ color: "#888", fontWeight: "normal", marginLeft: "10px" }}>
                ({dayOfWeek})
              </span>
            </h3>
            {groupedTasks[dateKey].map((task, idx) => (
              <TaskItem
                key={idx}
                title={task.title}
                postedAt={task.postedAt}
                dueDate={task.dueDate}
                documents={task.documents || []}
                sectionId={sectionId}
                focalId={focalId}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;