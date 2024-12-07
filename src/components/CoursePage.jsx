import React, { useState } from "react";
import { Table, Button, Space, Popconfirm, message } from "antd";
import { EyeOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";

// Dữ liệu mẫu khóa học
const courseData = [
  { 
    id: "C001", 
    title: "React for Beginners", 
    instructor: "John Doe", 
    duration: "5 hours", 
    startDate: "2024-12-01", 
    endDate: "2024-12-15", 
    courseType: "Online", 
    category: "Web Development" 
  },
  { 
    id: "C002", 
    title: "Advanced JavaScript", 
    instructor: "Jane Smith", 
    duration: "10 hours", 
    startDate: "2024-12-05", 
    endDate: "2024-12-20", 
    courseType: "Offline", 
    category: "Programming" 
  },
  { 
    id: "C003", 
    title: "Data Science with Python", 
    instructor: "Emily Davis", 
    duration: "8 hours", 
    startDate: "2024-12-10", 
    endDate: "2024-12-25", 
    courseType: "Online", 
    category: "Data Science" 
  },
  { 
    id: "C004", 
    title: "UI/UX Design", 
    instructor: "David Brown", 
    duration: "6 hours", 
    startDate: "2024-12-15", 
    endDate: "2024-12-30", 
    courseType: "Offline", 
    category: "Design" 
  },
  { 
    id: "C005", 
    title: "Machine Learning Basics", 
    instructor: "Michael Johnson", 
    duration: "12 hours", 
    startDate: "2024-12-10", 
    endDate: "2024-12-20", 
    courseType: "Online", 
    category: "Artificial Intelligence" 
  },
  { 
    id: "C006", 
    title: "Full-Stack Web Development", 
    instructor: "Sarah Lee", 
    duration: "15 hours", 
    startDate: "2024-12-05", 
    endDate: "2024-12-25", 
    courseType: "Hybrid", 
    category: "Web Development" 
  },
  { 
    id: "C007", 
    title: "Introduction to Cybersecurity", 
    instructor: "James Wilson", 
    duration: "8 hours", 
    startDate: "2024-12-12", 
    endDate: "2024-12-22", 
    courseType: "Online", 
    category: "Cybersecurity" 
  },
  { 
    id: "C008", 
    title: "Cloud Computing with AWS", 
    instructor: "Sophia Martinez", 
    duration: "10 hours", 
    startDate: "2024-12-15", 
    endDate: "2024-12-30", 
    courseType: "Offline", 
    category: "Cloud Computing" 
  },
  { 
    id: "C009", 
    title: "Big Data Analytics", 
    instructor: "Robert Garcia", 
    duration: "12 hours", 
    startDate: "2024-12-10", 
    endDate: "2024-12-25", 
    courseType: "Online", 
    category: "Data Science" 
  },
  { 
    id: "C010", 
    title: "Digital Marketing 101", 
    instructor: "Laura Hernandez", 
    duration: "6 hours", 
    startDate: "2024-12-20", 
    endDate: "2024-12-30", 
    courseType: "Offline", 
    category: "Marketing" 
  },
  { 
    id: "C011", 
    title: "Introduction to Blockchain", 
    instructor: "Andrew Clark", 
    duration: "8 hours", 
    startDate: "2024-12-18", 
    endDate: "2024-12-28", 
    courseType: "Online", 
    category: "Blockchain" 
  },
  { 
    id: "C012", 
    title: "Photography Basics", 
    instructor: "Emma Moore", 
    duration: "4 hours", 
    startDate: "2024-12-15", 
    endDate: "2024-12-20", 
    courseType: "Offline", 
    category: "Photography" 
  },
  { 
    id: "C013", 
    title: "Game Development with Unity", 
    instructor: "Olivia White", 
    duration: "14 hours", 
    startDate: "2024-12-05", 
    endDate: "2024-12-25", 
    courseType: "Hybrid", 
    category: "Game Development" 
  },
  { 
    id: "C014", 
    title: "Ethical Hacking", 
    instructor: "William Evans", 
    duration: "10 hours", 
    startDate: "2024-12-10", 
    endDate: "2024-12-20", 
    courseType: "Online", 
    category: "Cybersecurity" 
  }
];


// Tạo màu cho category và viền ngoài chữ
const getCategoryStyle = (category) => {
  switch (category) {
    case "Web Development":
      return { color: "blue", borderColor: "blue", backgroundColor: "lightblue" };
    case "Programming":
      return { color: "green", borderColor: "green", backgroundColor: "lightgreen" };
    case "Data Science":
      return { color: "purple", borderColor: "purple", backgroundColor: "lavender" };
    case "Design":
      return { color: "orange", borderColor: "orange", backgroundColor: "lightyellow" };
    default:
      return { color: "gray", borderColor: "gray", backgroundColor: "lightgray" };
  }
};

const CoursePage = () => {
  const [courses, setCourses] = useState(courseData);

  const handleDelete = (id) => {
    const newCourses = courses.filter(course => course.id !== id);
    setCourses(newCourses);
    message.success("Course deleted successfully");
  };

  const handleAddCourse = () => {
    // Hàm này có thể mở form để thêm khóa học mới
    message.info("Add Course functionality is not implemented yet");
  };

  // Cột bảng
  const columns = [
    {
      title: "Course ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Instructor",
      dataIndex: "instructor",
      key: "instructor",
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "endDate",
    },
    {
      title: "Course Type",
      dataIndex: "courseType",
      key: "courseType",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (category) => {
        const style = getCategoryStyle(category);
        return (
          <span
            style={{
              padding: "5px 10px",
              borderRadius: "8px",
              border: `2px solid ${style.borderColor}`,
              color: style.color,
              backgroundColor: style.backgroundColor,
            }}
          >
            {category}
          </span>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            icon={<EyeOutlined />}
            onClick={() => message.info(`Viewing ${record.title}`)}
          />
          <Popconfirm
            title="Are you sure to delete this course?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <section>
      <h2>Course List</h2>
      {/* Nút Add Course */}
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={handleAddCourse}
        style={{
          backgroundColor: "black",
          color: "white",
          borderColor: "black",
          marginBottom: 16,
          float: "right", // Đặt nút ở bên phải
        }}
      >
        Add Course
      </Button>
      <Table
        columns={columns}
        dataSource={courses}
        rowKey="id"
        pagination={false}
      />
    </section>
  );
};

export default CoursePage;
