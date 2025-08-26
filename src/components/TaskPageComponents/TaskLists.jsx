import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, sectionId, focalId }) => {
  // Group tasks by postDate
  const groupedTasks = tasks.reduce((acc, task) => {
    const postDate = new Date(task.postDate);
    const dateKey = postDate.toDateString(); // e.g., "Mon Aug 05 2025"

    if (!acc[dateKey]) {
      // Format once per unique date
      const formattedDate = postDate.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      });
      const dayOfWeek = postDate.toLocaleDateString('en-US', {
        weekday: 'long',
      });

      acc[dateKey] = {
        formattedDate,
        dayOfWeek,
        tasks: [],
      };
    }

    acc[dateKey].tasks.push(task);
    return acc;
  }, {});

  return (
    <div className="task-list">
      {Object.values(groupedTasks).map(({ formattedDate, dayOfWeek, tasks }) => (
        <div key={formattedDate} className="date-group">
          <h3 className="date-header">
            {formattedDate}
            <span className="day-of-week"> ({dayOfWeek})</span>
          </h3>
          {tasks.map((task, idx) => (
            <TaskItem
              key={idx}
              title={task.title}
              postedTime={task.postedTime}
              dueDate={task.dueDate}
              documents={task.documents || []}
              status={task.status}
              idx={task.idx} // pass the original index for routing
              sectionId={sectionId}
              focalId={focalId}
              taskId={task.id} // pass the actual task ID for routing
            />
          )
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;

// TaskList needed to be fixed to group by postDate and show date headers