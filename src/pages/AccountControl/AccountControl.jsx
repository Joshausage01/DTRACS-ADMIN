import React, { useState } from "react";
import AccountTabs from "../../components/AccountControlComponents/AccountTabs";
import "./AccountControl.css";

// Mock data
const mockAccounts = {
  verification: [
    { id: 1, name: "Juan Dela Cruz", type: "School", school: "Binan Integrated HS" },
    { id: 2, name: "Maria Santos", type: "Focal" },
    { id: 3, name: "Pedro Ramos", type: "School", school: "San Antonio HS" },
    { id: 4, name: "Ana Cruz", type: "Focal" },
  ],
  termination: [
    { id: 5, name: "Pedro Reyes", school: "Binan Integrated HS", type: "School" },
    { id: 6, name: "Ana Cruz", school: "San Antonio HS", type: "Focal" },
  ],
  designation: [
    { id: 7, name: "Isidra L. Galman", section: "School Management & Eval Section" },
    { id: 8, name: "Edward R. Manuel", section: "Planning & Research Section" },
  ],
};

const AccountControl = () => {
  const [activeTab, setActiveTab] = useState("verification");
  const [ sortFilter, setSortFilter ] = useState("All");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSortFilter("All")  // reset filter on tab change
  };

  const handleSortChange = (e) => {
    setSortFilter(e.target.value);
  };

  // Pick account based on tab
  let accounts = mockAccounts[activeTab] || [];

  // Apply filter for verification & termination
  if (activeTab === "verification" || activeTab === "termination") {
    if (sortFilter !== "All") {
      accounts = accounts.filter((acc) => acc.type === sortFilter);
    }
  }

  return (
    <div className="account-control">
      {/* Tabs */}
      <AccountTabs onTabChange={handleTabChange} />

      {/* Filter only for verification & termination */}
      {(activeTab === "verification" || activeTab === "termination") && (
        <div className="account-filter">
          <select value={sortFilter} onChange={handleSortChange}>
            <option value="All">All Accounts</option>
            <option value="School">School</option>
            <option value="Focal">Focals</option>
          </select>
        </div>
      )}

      {/* Account list */}
      <div className="account-list">
        {accounts.map((acc) => (
          <div key={acc.id} className={`account-item ${activeTab}`}>
            {/* Left column: avatar + name (+ meta for non-designation) */}
            <div className="account-info">
              <div className="account-avatar">👤</div>
              <div className="account-content">
                <div className="account-name">{acc.name}</div>

                {/* Only show meta under the name for verification/termination */}
                {(activeTab === "verification" || activeTab === "termination") && (
                  <div className="account-meta">
                    {acc.type === "School" ? acc.school : "Focal"}
                  </div>
                )}
              </div>
            </div>

            {/* Middle column: section (designation only) */}
            {activeTab === "designation" && (
              <div className="account-section">{acc.section}</div>
            )}

            {/* Right column: action button */}
            <div className="account-action">
              {activeTab === "verification" && (
                <button className="inspect-btn">Inspect</button>
              )}
              {activeTab === "termination" && (
                <button className="delete-btn">Delete Account</button>
              )}
              {activeTab === "designation" && (
                <button className="edit-btn">Edit</button>
              )}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default AccountControl;
