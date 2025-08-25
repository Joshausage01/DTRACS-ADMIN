import React from 'react'
import './SectionCard.css';
import { FaUsers } from 'react-icons/fa'; // Importing the icon for accounts

const SectionCard = ({ title, image, onClick }) => {
  return (
    <div className="section-card" onClick={onClick} role="button" tabIndex={0} >
      <div className="section-card-image">
        <img src={image} alt={title} />
      </div>
      <div className="section-card-body">
        <h3>{title}</h3>
      </div>
      <div className="section-card-footer">
        <FaUsers className="footer-icon" />
        <span>Accounts</span>
      </div>
    </div>
  );
};

export default SectionCard;
