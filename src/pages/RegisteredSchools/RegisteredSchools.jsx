// src/pages/RegisteredSchools/RegisteredSchools.jsx
import React from "react";
import "./RegisteredSchools.css";
import { schoolAccounts } from "../../data/SchoolAccounts";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";


const RegisteredSchools = () => {
  return (
    <div className="admin-section">
      {/* Header */}
      <div className="reg-school-header">
        <h2 className="reg-school-title">Schools</h2>
      </div>

      {/* List of Schools */}
      <div className="reg-school-list">
        {schoolAccounts.map((school, index) => (
          <div className="reg-school-item" key={index}>
            {/* School Info: Logo + Name + Address */}
            <div className="reg-school-info">
              <img
                src={school.logo}
                alt={`${school.name} logo`}
                className="reg-school-logo"
              />
              <div className="reg-school-text">
                <span className="reg-schoolname">{school.name}</span>
                <p className="reg-school-address">{school.schoolAddress}</p>
              </div>
            </div>

            {/* Clickable Account Count → Links to specific school's accounts */}
            <Link to={`/registered-schools/${school.slug}`} className="account-count-link" style={{ textDecoration: 'none' }}>
              <div className="account-count">
                <FaRegUser className="account-image" />
                <span>{school.accounts?.length || 0} Accounts</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegisteredSchools;
