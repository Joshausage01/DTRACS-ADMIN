import React, { useState } from "react";
import "./TaskTabs.css";

const TaskTabs = ({ onTabChange, onSortChange, taskCounts = {} }) => {
  const [activeTab, setActiveTab] = useState("ongoing");
  const [sortValue, setSortValue] = useState("all");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  const handleSortChange = (e) => {
    setSortValue(e.target.value);
    onSortChange(e.target.value);
  };

  return (
    <div className="task-tabs-container">
      <div className="task-tabs">
        <button
          className={activeTab === "ongoing" ? "active" : ""}
          onClick={() => handleTabClick("ongoing")}
        >
          Ongoing Tasks
          {taskCounts.ongoing > 0 && <span className="dot green"></span>}
        </button>

        <button
          className={activeTab === "pastdue" ? "active" : ""}
          onClick={() => handleTabClick("pastdue")}
        >
          Past Due
          {taskCounts.pastdue > 0 && <span className="dot red"></span>}
        </button>

        <button
          className={activeTab === "history" ? "active" : ""}
          onClick={() => handleTabClick("history")}
        >
          Task History
        </button>
      </div>

      <div className="task-sort">
        <select value={sortValue} onChange={handleSortChange}>
          <option value="all">All Time</option>
          <option value="week">This Week</option>
          <option value="month">This Month</option>
        </select>
      </div>
    </div>
  );
};

export default TaskTabs;
