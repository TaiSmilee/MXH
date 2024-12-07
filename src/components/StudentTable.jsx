import React, { useState } from "react";
import { Table, Button, Space, Popconfirm, message } from "antd";
import { DownloadOutlined, EyeOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";

// Dữ liệu mẫu sinh viên
const generateRandomData = (num) => {
  const departments = ["Computer Science", "Engineering", "Business", "Arts & Sciences", "Mathematics", "Physics", "Biology"];
  const statuses = ["Active", "At Risk", "Inactive"];
  const names = ["Alice", "Bob", "Catherine", "David", "Eve", "Frank", "Grace", "Henry", "Ivy", "Jack", "Kathy", "Leo", "Mona", "Nathan", "Olivia", "Paul", "Quincy", "Rachel", "Sam", "Tina"];
  const surnames = ["Johnson", "Smith", "Lee", "Brown", "Taylor", "Anderson", "Harris", "Clark", "Lewis", "Robinson"];

  const students = [];
  for (let i = 1; i <= num; i++) {
    const id = `S${String(i).padStart(3, "0")}`;
    const name = `${names[Math.floor(Math.random() * names.length)]} ${surnames[Math.floor(Math.random() * surnames.length)]}`;
    const gender = departments[Math.floor(Math.random() * departments.length)];
    const education = (Math.random() * 2 + 2).toFixed(1); // Random GPA between 2.0 and 4.0
    const status = statuses[Math.floor(Math.random() * statuses.length)];

    students.push({ id, name, gender, education: parseFloat(education), status });
  }

  return students;
};

const studentData = generateRandomData(50);

// Tạo màu cho trường status
const getStatusColor = (status) => {
  switch (status) {
    case "Active":
      return "green";
    case "At Risk":
      return "orange";
    case "Inactive":
      return "red";
    default:
      return "gray";
  }
};

const StudentTable = () => {
  const [students, setStudents] = useState(studentData);

  const handleDelete = (id) => {
    const newStudents = students.filter(student => student.id !== id);
    setStudents(newStudents);
    message.success("Student deleted successfully");
  };

  const handleAddStudent = () => {
    // Hàm này có thể mở form để thêm sinh viên mới
    message.info("Add Student functionality is not implemented yet");
  };

  // Cột bảng
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Education",
      dataIndex: "education",
      key: "education",
      render: (text) => text.toFixed(1),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <span style={{ color: getStatusColor(status) }}>{status}</span>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            icon={<EyeOutlined />}
            onClick={() => message.info(`Viewing ${record.name}`)}
          />
          <Button
            icon={<DownloadOutlined />}
            onClick={() => message.info(`Downloading data for ${record.name}`)}
          />
          <Popconfirm
            title="Are you sure to delete this student?"
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
      <h2>Student List</h2>
      {/* Nút Add Student ở bên phải */}
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={handleAddStudent}
        style={{
          backgroundColor: "black",
          color: "white",
          borderColor: "black",
          marginBottom: 16,
          float: "right", // Đặt nút ở bên phải
        }}
      >
        Add Student
      </Button>
      <Table
        columns={columns}
        dataSource={students}
        rowKey="id"
        pagination={false}
      />
    </section>
  );
};

export default StudentTable;
