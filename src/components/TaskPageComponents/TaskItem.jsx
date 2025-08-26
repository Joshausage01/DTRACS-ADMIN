import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PiClipboardTextBold } from "react-icons/pi";
import { IoMdCheckmark } from "react-icons/io";


const TaskItem = ({ title, postedTime, dueDate, status, focalId, sectionId, documents = [], taskId }) => {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/sections/${sectionId}/focals/${focalId}/documents/${id}`);
  };

  // Determine status label + color
  const getStatusLabel = () => {
    if (status === "history") {
      return (
        <div className="task-due history">
          <IoMdCheckmark size={14} />
          Completed
        </div>
      );
    }
    if (status === "pastdue") {
      return <div className="task-due pastdue">{dueDate}</div>;
    }
    return <div className="task-due">{dueDate}</div>; // default ongoing
  };

  return (
    <>
      {documents.length > 0 ? (
        documents.map((doc, idx) => (
          <div
            key={idx}
            className="task-item"
            onClick={() => handleNavigate(doc.id)}
          >
            <div className="task-icon">
              <PiClipboardTextBold size={20} />
            </div>
            <div className="task-content">
              <h4>{doc.title || title}</h4>
              <p className="posted-at">Posted at {postedTime}</p>
            </div>
            {getStatusLabel()}
          </div>
        ))
      ) : (
        <div
          className="task-item"
          onClick={() => handleNavigate(taskId)}
        >
          <div className="task-icon">
            <PiClipboardTextBold size={20} />
          </div>
          <div className="task-content">
            <h4>{title}</h4>
            <p className="posted-at">Posted at {postedTime}</p>
          </div>
          {getStatusLabel()}
        </div>
      )}
    </>
  );
};

export default TaskItem;
