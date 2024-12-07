import React from "react";
import { Palette, Code, Film, Video } from "lucide-react"; // Import các biểu tượng từ Lucide

const Courses = () => {
  return (
    <div style={styles.container}>
      {courseData.map((course, index) => (
        <div key={index} style={styles.card}>
          <div style={styles.icon}>{course.icon}</div>
          <h3 style={styles.title}>{course.title}</h3>
          <p style={styles.description}>{course.description}</p>
          <div style={styles.footer}>
            <span style={styles.time}>{course.time}</span>
            <span style={styles.price}>{course.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

const courseData = [
  {
    icon: <Palette size={30} color="#6c63ff" />, // Biểu tượng UI/UX Design
    title: "UI/UX Design",
    description: "Learn modern UI/UX design principles and tools",
    time: "1 day left",
    price: "$180",
  },
  {
    icon: <Code size={30} color="#6c63ff" />, // Biểu tượng Web Development
    title: "Web Development",
    description: "Master full-stack web development",
    time: "1 day left",
    price: "$150",
  },
  {
    icon: <Film size={30} color="#6c63ff" />, // Biểu tượng Motion Graphic
    title: "Motion Graphic",
    description: "Create stunning motion graphics and animations",
    time: "1 day left",
    price: "$165",
  },
  {
    icon: <Video size={30} color="#6c63ff" />, // Biểu tượng Animation
    title: "Animation",
    description: "Learn professional animation techniques",
    time: "1 day left",
    price: "$150",
  },
];

const styles = {
  container: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "20px",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    width: "200px",
    padding: "15px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    transition: "transform 0.3s, box-shadow 0.3s",
  },
  cardHover: {
    transform: "scale(1.05)",
    boxShadow: "0 6px 10px rgba(0, 0, 0, 0.15)",
  },
  icon: {
    marginBottom: "10px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "600",
    margin: "10px 0",
  },
  description: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "15px",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "14px",
    fontWeight: "bold",
  },
  time: {
    color: "#888",
  },
  price: {
    color: "#333",
  },
};

export default Courses;
