import React from "react";
import { useNavigate } from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import "./FocalCard.css";
import { FaUserCircle } from "react-icons/fa";


const COLORS = ["#4CAF50", "#E53935", "#1E88E5"]; 
// green = complete, red = incomplete, blue = pending

const FocalCard = ({ section, name, role, stats, projects, sectionId, id}) => {
  const navigate = useNavigate();

  const handleClick = () =>{
    navigate(`/sections/${sectionId}/focals/${id}`) // the route needs to be edited to match the actual path
  };

  return (
    <div className="focal-card" onClick={handleClick}>
      {/* Header */}
      <div className="focal-header">
        <FaUserCircle className="focal-avatar" />
        <div>
          <h3>{section}</h3>
          <p>{name}</p>
        </div>
      </div>

      {/* Body */}
      <div className="focal-body">
        {/* Donut Chart */}
        <div className="focal-chart">
          <h4 className="summary">Monthly Summary</h4>
          <ResponsiveContainer width={180} height={180}>
            <PieChart>
              <Pie
                data={stats}    // ← (Frontend static for now) | (Backend: replace with fetched stats)
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={75}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
              >
                {stats.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip formatter={(value, name) => [`${value}%`, name]} />
            </PieChart>
          </ResponsiveContainer>
          {/* Legend */}
          <div className="focal-legend">
            <span><span className="legend-box complete"></span>Complete</span>
            <span><span className="legend-box incomplete"></span>Past Due</span>
            <span><span className="legend-box pending"></span>Pending</span>
          </div>
        </div>

        {/* Project List */}
        <div className="focal-projects">
          {projects.map((proj, idx) => (
            <div key={idx} className="focal-project">
              <div className="project-title">{proj.name}</div>
              <div className="progress-wrapper">
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${proj.progress}%` }}
                  ></div>
                </div>
                <span className="progress-value">{proj.progress}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FocalCard;
