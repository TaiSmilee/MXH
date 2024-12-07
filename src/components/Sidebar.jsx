import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="logo">
        Easy<span>Learn</span>
      </h2>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/" className="active">
              <span>📊</span> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/students">
              <span>👨‍🎓</span> Students
            </Link>
          </li>
          <li>
            <Link to="/courses">
              <span>📚</span> Courses
            </Link>
          </li>
          <li>
            <Link to="/dropout-analysis">
              <span>📈</span> Analysis
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
