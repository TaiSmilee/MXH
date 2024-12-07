import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Statistics from "./components/Statistics";
import Charts from "./components/Charts";
import Courses from "./components/Courses";
import StudentPage from "./components/StudentPage"; // Import Student Page
import CoursePage from "./components/CoursePage"; // Import Course Page
import StudentDropoutAnalysis from "./components/StudentDropoutAnalysis"; // Import the new analysis page
import "./index.css";

const App = () => {
  return (
    <Router>
      <div className="container d-flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <main className="flex-grow-1">
          <Header />
          
          {/* Routes */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<StudentPage />} />
            <Route path="/courses" element={<CoursePage />} /> {/* Trang khóa học */}
            <Route path="/analysis" element={<Statistics />} />
            <Route path="/dropout-analysis" element={<StudentDropoutAnalysis />} /> {/* Trang phân tích dropout */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
