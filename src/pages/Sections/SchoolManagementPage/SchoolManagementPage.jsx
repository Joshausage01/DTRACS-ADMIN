import React, { useState, useEffect } from "react";
import FocalCard from "../../../components/FocalCard/FocalCard";
import "./SchoolManagementPage.css";

const SchoolManagementPage = () => {
  // Local state to hold focal data
  const [focals, setFocals] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fake API fetch (simulates getting data from backend)
  useEffect(() => {
    const fetchFocals = async () => {
      setLoading(true);

      // ⬇️ Mock API call (replace with fetch("/api/focals") later when backend is ready)
      setTimeout(() => {
        const mockData = [
          {
            section: "School Management",
            name: "Isidra L. Galman",
            role: "Focal",
            stats: [
              { name: "Complete", value: 57 },
              { name: "Incomplete", value: 23 },
              { name: "Pending", value: 20 },
            ],
            projects: [
              { name: "Project Proposal 1", progress: 64 },
              { name: "Project Proposal 2", progress: 46 },
              { name: "Project Proposal 3", progress: 77 },
              { name: "Project Proposal 4", progress: 84 },
              { name: "Project Proposal 5", progress: 72 },
            ],
          },
        ];

        setFocals(mockData);
        setLoading(false);
      }, 1000); // simulate network delay
    };

    fetchFocals();
  }, []);

  if (loading) {
    return <div className="loading">Loading focal data...</div>;
  }

  return (
    <div className="focal-container">
      {focals.map((focal, i) => (
        <FocalCard key={i} {...focal} />
      ))}
    </div>
  );
};

export default SchoolManagementPage;


/*
-Right now, the fake API is just a 'setTimeout()' with mock data.
-Later, you’ll swap this with something like:

  const response = await fetch("/api/focals");
  const data = await response.json();
  setFocals(data);
      
*/