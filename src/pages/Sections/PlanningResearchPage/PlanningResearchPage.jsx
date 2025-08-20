import React, { useState, useEffect } from "react";
import FocalCard from "../../../components/FocalCard/FocalCard";

const PlanningResearchPage = () => {
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
            section: "Research",
            name: "Edward R. Manuel",
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
          {
            section: "Planning",
            name: "Charles M. Patio",
            role: "Focal",
            stats: [
              { name: "Complete", value: 40 },
              { name: "Incomplete", value: 40 },
              { name: "Pending", value: 20 },
            ],
            projects: [
              { name: "Project Proposal 1", progress: 37 },
              { name: "Project Proposal 2", progress: 46 },
              { name: "Project Proposal 3", progress: 76 },
              { name: "Project Proposal 4", progress: 68 },
              { name: "Project Proposal 5", progress: 54 },
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
}

export default PlanningResearchPage;
