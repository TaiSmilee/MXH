import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const Charts = () => {
  const dropoutChartRef = useRef(null); // Sử dụng useRef() để gán ref

  useEffect(() => {
    const dropoutCtx = dropoutChartRef.current?.getContext("2d");
    if (!dropoutCtx) return;

    const chartInstance = new Chart(dropoutCtx, {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr"],
        datasets: [
          {
            label: "Predicted",
            data: [100, 160, 140, 180],
            backgroundColor: "#a56cff",
          },
          {
            label: "Actual",
            data: [90, 150, 135, 170],
            backgroundColor: "#f78bff",
          },
        ],
      },
      options: {
        plugins: {
          tooltip: {
            callbacks: {
              label: (context) => {
                const label = context.dataset.label || "";
                const value = context.raw;
                return `${label}: ${value}`;
              },
            },
          },
        },
        responsive: true,
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
            max: 200,
            ticks: {
              stepSize: 50,
            },
          },
        },
      },
    });

    // Cleanup khi component bị gỡ
    return () => {
      chartInstance.destroy();
    };
  }, []);

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <h3 style={{ textAlign: "center", marginBottom: "10px" }}>
        Dropout Predictions vs Actual
      </h3>
      <canvas ref={dropoutChartRef} style={{ maxHeight: "400px" }}></canvas>
    </div>
  );
};

export default Charts;
