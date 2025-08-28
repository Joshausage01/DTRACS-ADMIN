// src/pages/RegisteredSchools/SchoolAccDisplay/SchoolAccDisplay.jsx
import React from 'react'
import "./SchoolAccDisplay.css";
import { useParams, useNavigate } from "react-router-dom";
import { schoolAccounts } from "../../../data/SchoolAccounts";
import { IoIosArrowBack } from "react-icons/io";


const SchoolAccDisplay = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const { schoolSlug } = useParams();
  const school = schoolAccounts.find(s => s.slug === schoolSlug);

  if (!school) {
    return (
      <div className="account-section">
        <h2>School Not Found</h2>
        <p>The school you're looking for doesn't exist.</p>
      </div>
    );
  };

  const hasAccounts = school.accounts && school.accounts.length > 0;

  return (
    <div className="account-section">
      {/* Back button */}
      <button className="school-back-btn" onClick={handleClick}>
        <IoIosArrowBack size={24} />
        <span>Back</span>
      </button>


      {/* Header */}
      <div className="account-header">
        <div className="account-header-info">
          <img src={school.logo} alt={`${school.name} logo`} className="account-header-logo" />
          <div>
            <h2 className="account-title">{school.name}</h2>
            <p className="account-subtitle">{school.schoolAddress}</p>
          </div>
        </div>
      </div>

      {/* Account List */}
      <div className="account-list">
        {hasAccounts ? (
          school.accounts.map((account) => (
            <div className="account-item" key={account.id}>
              <div className="account-info">
                <img src={account.avatar} alt="" className="account-logo" />
                <div className="account-text">
                  <span className="accountname">
                    {account.firstName} {account.middleName ? `${account.middleName} ` : ""}{account.lastName}
                  </span>
                  <p className="account-address">{account.position}</p>
                </div>
              </div>
              <div className="account-email">
                <span>{account.email}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="no-accounts">
            <span>No accounts available for this school.</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SchoolAccDisplay
