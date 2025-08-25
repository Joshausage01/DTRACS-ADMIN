import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PiClipboardTextBold } from "react-icons/pi";

const TaskItem = ({ title, postedAt, dueDate, focalId, sectionId, documents = [] }) => {
  const navigate = useNavigate();

  const handleNavigate = (idx = 0) => {
    navigate(`/sections/${sectionId}/focals/${focalId}/documents/${idx}`);
  };

  return (
    <>
      {documents.length > 0 ? (
        documents.map((doc, idx) => (
          <div
            key={idx}
            className="task-item"
            onClick={() => handleNavigate(idx)}
          >
            <div className="task-icon">
              <PiClipboardTextBold size={20} />
            </div>
            <div className="task-content">
              <h4>{doc.title || title}</h4>
              <p className="posted-at">{postedAt}</p>
            </div>
            <div className="task-due">{dueDate}</div>
          </div>
        ))
      ) : (
        <div
          className="task-item"
          onClick={() => handleNavigate(0)}
        >
          <div className="task-icon">
            <PiClipboardTextBold size={20} />
          </div>
          <div className="task-content">
            <h4>{title}</h4>
            <p className="posted-at">{postedAt}</p>
          </div>
          <div className="task-due">{dueDate}</div>
        </div>
      )}
    </>
  );
};

export default TaskItem;
