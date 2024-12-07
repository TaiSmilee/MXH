import React from "react";

const Header = () => {
  return (
    <header>
      <input type="text" className="search-bar" placeholder="Search..." />
      <div className="user-controls">
        <span>🔔</span>
        <span>👤</span>
      </div>
    </header>
  );
};

export default Header;
