import React from "react";
import "./Dashboard.css";
import SectionCard from "../../components/SectionCard/SectionCard"; // adjust path if needed
import NoImage from "../../assets/images/no-image.jpg"; // adjust path if needed

const Dashboard = () => {
  const sections = [
    { title: "School Management Monitoring and Evaluation Section", image: NoImage },
    { title: "Planning and Research", image: NoImage },
    { title: "Human Resource Development Section", image: NoImage },
    { title: "School Health Section", image: NoImage },
    { title: "Education Facilities Section", image: NoImage },
  ];

  return (
    <div className="section-container">
      {sections.map((section, index) => (
        <SectionCard
          key={index}
          title={section.title}   // ✅ use string
          image={section.image}   // ✅ use string path
        />
      ))}
    </div>
  );
};

export default Dashboard;
