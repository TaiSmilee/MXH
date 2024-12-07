import React from "react";

const Statistics = () => {
  const stats = [
    {
      title: "Prediction Accuracy",
      value: "89.4%",
      description: "+2.4% from last semester",
    },
    {
      title: "At-Risk Students",
      value: "234",
      description: "15% of total enrollment",
    },
    {
      title: "Intervention Success",
      value: "78%",
      description: "+12% from previous year",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "20px",
        marginBottom: "20px",
      }}
    >
      {stats.map((stat, index) => (
        <div
          key={index}
          style={{
            flex: 1,
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            textAlign: "center",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3
            style={{
              fontSize: "16px",
              color: "#555",
              marginBottom: "10px",
            }}
          >
            {stat.title}
          </h3>
          <p
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            {stat.value}
          </p>
          <p
            style={{
              fontSize: "14px",
              color: "#888",
            }}
          >
            {stat.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
