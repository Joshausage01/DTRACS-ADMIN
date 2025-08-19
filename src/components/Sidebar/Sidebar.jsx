import React from "react";
import "./Sidebar.css";
import { MdTab } from "react-icons/md";
import { RiSchoolFill } from "react-icons/ri";
import { BiSolidUserAccount } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useSidebar } from "../../context/SidebarContext";

const SchoolSidebar = ({ isExpanded }) => {
  const { isExpanded: expanded} = useSidebar();

  return (
    <aside className={`sidebar ${isExpanded ? "expanded" : ""}`}>
      <nav className="sidebar-nav">
        <ul>
          {/* Home */}
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active" : ""}`
              }
              end
            >
              <MdTab className="sidebar-icon" />
              {isExpanded && <span className="sidebar-text">Sections</span>}
            </NavLink>
          </li>

          {/* To-do */}
          <li>
            <NavLink
              to="/todo"
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active" : ""}`
              }
            >
              <RiSchoolFill className="sidebar-icon" />
              {isExpanded && <span className="sidebar-text">Registered Schools</span>}
            </NavLink>
          </li>

          {/* Manage Account */}
          <li>
            <NavLink
              to="/manage-account"
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active" : ""}`
              }
            >
              <BiSolidUserAccount className="sidebar-icon" />
              {isExpanded && (
                <span className="sidebar-text">Account Control</span>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SchoolSidebar;
