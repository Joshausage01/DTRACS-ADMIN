// src/components/TaskDescription/TaskDescription.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { PiClipboardTextBold } from "react-icons/pi";


const TaskDescription = ({ task, focalName, section, description, status }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1); // Navigate back to the previous page
  };


  if (!task) return <p>Task not found.</p>;

  // Format postDate: "Month Day, Year" → e.g., "August 5, 2025"
  const postDate = new Date(task.postDate);
  const formattedPostDate = postDate.toLocaleDateString('end-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  // Determine due date color
    const getDueTimeColor = () => {
      if (status === "history") {
        return <span className="task-due-history">{task.dueDate} {task.dueTime}</span>;
      }
      if (status === "pastdue") {
        return <span className="task-due-pastdue">{task.dueDate} {task.dueTime}</span>;
      }
      return <span className="task-due-ongoing">{task.dueDate} {task.dueTime}</span>;
    };

  return (
    <div className="task-description">
      {/* Back button */}
      <button className="back-btn" onClick={handleClick}>
        <IoIosArrowBack size={24} />
        <span>Back</span>
      </button>

      {/* Task Header */}
      <div className="task-header">
        <div className="task-icon">
          <PiClipboardTextBold size={30} />
        </div>
        <h1>{task.title}</h1>
      </div>

      {/* Subheader */}
      <div className="task-subheader">
        <span className="task-section">{section || "No section"}</span>
        {getDueTimeColor()}
      </div>

      {/* Author + Posted Date */}
      <div className="task-meta">
        <span className="author">{focalName}</span>
        <span className="dot-space">•</span>
        <span className="posted">Posted on {formattedPostDate}</span>
      </div>

      {/* Description */}
      <p className="task-body">{description || "No description yet."}</p>
    </div>
  );
};

export default TaskDescription;