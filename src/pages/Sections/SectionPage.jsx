// src/pages/Sections/SectionPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { sectionData } from "../../data/focals";
import FocalCard from "../../components/FocalCard/FocalCard";
import "./SectionPage.css";

const SectionPage = () => {
  const { sectionId } = useParams();
  const focals = sectionData[sectionId] || [];

  if (!focals.length) {
    return <div>No focals found for this section.</div>;
  }

  return (
    <div className="focal-container">
      {focals.map((focal) => (
        <FocalCard key={focal.id} {...focal} sectionId={sectionId} />
      ))}
    </div>
  );
};

export default SectionPage;
