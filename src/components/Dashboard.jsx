import React from "react";
import Statistics from "./Statistics";
import Charts from "./Charts";
import Courses from "./Courses";

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <Statistics />
      <Charts />
      <h2>All Courses</h2>
      <Courses />
    </div>
  );
};

export default Dashboard;
