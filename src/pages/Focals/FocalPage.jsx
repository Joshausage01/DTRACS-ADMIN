// src/pages/Focals/FocalPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { sectionData } from "../../data/focals";
import "./FocalPage.css";

const FocalPage = () => {
  const { sectionId, focalId } = useParams();
  const focals = sectionData[sectionId] || [];
  const focal = focals.find((f) => f.id === focalId);

  if (!focal) {
    return <div>Focal not found.</div>;
  }

  return (
    <div className="focal-detail">
      <h2>{focal.name} ({focal.role})</h2>
      <h3>{focal.section}</h3>
      <ul>
        {focal.projects.map((proj, i) => (
          <li key={i}>{proj.name} – {proj.progress}%</li>
        ))}
      </ul>
    </div>
  );
};

export default FocalPage;
