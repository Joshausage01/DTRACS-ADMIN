import React, { useState } from "react";
import AccountTabs from "../../components/AccountControlComponents/AccountTabs";
import "./AccountControl.css";

// Mock data
const mockAccounts = {
  verification: [
    { id: 1, name: "Juan Dela Cruz", type: "School", school: "Binan Integrated HS" },
    { id: 2, name: "Maria Santos", type: "Focal" },
  ],
  termination: [
    { id: 3, name: "Pedro Reyes", school: "Binan Integrated HS", type: "School" },
  ],
  designation: [
    { id: 4, name: "Isidra L. Galman", section: "School Management & Evaluation Section" },
    { id: 5, name: "Edward R. Manuel", section: "Planning & Research Section" },
  ],
};

// Allowed sections
const designationOptions = [
  "School Management & Evaluation Section",
  "Planning & Research Section",
  "Human Resource Development Section",
  "Social Mobilization and Networking Section",
  "Education Facilities Section",
];

const AccountControl = () => {
  const [activeTab, setActiveTab] = useState("verification");
  const [sortFilter, setSortFilter] = useState("All");
  const [accounts, setAccounts] = useState(mockAccounts);

  const [editingId, setEditingId] = useState(null);
  const [tempSection, setTempSection] = useState("");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSortFilter("All");
    setEditingId(null); // exit edit mode when switching tabs
  };

  const handleSortChange = (e) => {
    setSortFilter(e.target.value);
  };

  // Filter accounts per tab
  let currentAccounts = accounts[activeTab] || [];
  if (activeTab !== "designation" && sortFilter !== "All") {
    currentAccounts = currentAccounts.filter((acc) => acc.type === sortFilter);
  }

  // Save designation change
  const saveSection = (id) => {
    setAccounts((prev) => ({
      ...prev,
      designation: prev.designation.map((acc) =>
        acc.id === id ? { ...acc, section: tempSection } : acc
      ),
    }));
    setEditingId(null);
  };

  return (
    <div className="account-control">
      <AccountTabs onTabChange={handleTabChange} />

      {(activeTab === "verification" || activeTab === "termination") && (
        <div className="account-filter">
          <select value={sortFilter} onChange={handleSortChange}>
            <option value="All">All Accounts</option>
            <option value="School">School</option>
            <option value="Focal">Focal</option>
          </select>
        </div>
      )}

    <div className="account-list">
      {currentAccounts.map((acc) => (
        <div key={acc.id} className={`account-item ${activeTab}`}>
          {(activeTab === "verification" || activeTab === "termination") && (
            <div className="account-info">
              <div className="account-avatar">👤</div>
              <div className="account-content">
                <div className="account-name">{acc.name}</div>
                <div className="account-meta">
                  {acc.type === "School" ? acc.school : "Focal"}
                </div>
              </div>
            </div>
          )}

            {/* Designation Tab */}
            {activeTab === "designation" && (
              <div className="designation-row">
                {/* Avatar + Name */}
                <div className="account-info">
                  <div className="account-avatar">👤</div>
                  <div className="account-content">
                    <div className="designation-name">{acc.name}</div>
                  </div>
                </div>

                {/* Section */}
                <div className="designation-section">
                  {editingId === acc.id ? (
                    <select
                      value={tempSection}
                      onChange={(e) => setTempSection(e.target.value)}
                    >
                      {designationOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <span>{acc.section}</span>
                  )}
                </div>

                {/* Actions */}
                <div className="designation-action">
                  {editingId === acc.id ? (
                    <>
                      <button onClick={() => saveSection(acc.id)}>Save</button>
                      <button onClick={() => setEditingId(null)}>Cancel</button>
                    </>
                  ) : (
                    <button
                      className="edit-btn"
                      onClick={() => {
                        setEditingId(acc.id);
                        setTempSection(acc.section);
                      }}
                    >
                      Edit
                    </button>
                  )}
                </div>
              </div>
            )}
            
            {/* Buttons */}
            {activeTab === "verification" && (
              <div className="account-action">
                <button className="inspect-btn">Inspect</button>
              </div>
            )}
            {activeTab === "termination" && (
              <div className="account-action">
                <button className="delete-btn">Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountControl;