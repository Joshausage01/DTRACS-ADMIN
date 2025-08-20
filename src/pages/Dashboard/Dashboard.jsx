import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import SectionCard from "../../components/SectionCard/SectionCard"; // adjust path if needed
import NoImage from "../../assets/images/no-image.jpg"; // adjust path if needed

const Dashboard = () => {
  const navigate = useNavigate();

  const sections = [
  { title: "School Management Monitoring and Evaluation Section", path:"/sections/school-management", image: NoImage },
  { title: "Planning and Research", path:"/sections/planning-research", image: NoImage },
  { title: "Human Resource Development Section", path:"/sections/hr", image: NoImage },
  { title: "Social Mobilization and Networking Section", path:"/sections/social-mobilization", image: NoImage },
  { title: "Education Facilities Section", path:"/sections/educ-facilities", image: NoImage },
  { title: "Disaster Risk Reduction and Management Section", path:"/sections/disaster-risk", image: NoImage },
  { title: "School Health Section", path:"/sections/health", image: NoImage },
  { title: "Youth Formation Section", path:"/sections/youth-formation", image: NoImage }
];

  return (
    <div className="section-container">
      {sections.map((section, index) => (
        <SectionCard
          key={index}
          title={section.title}   // ✅ use string
          image={section.image}   // ✅ use string path
          onClick={() => navigate(section.path)} // Navigate to the section path
        />
      ))}
    </div>
  );
};

export default Dashboard;
