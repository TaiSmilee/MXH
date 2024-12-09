import React from "react";
import { Button, Popconfirm, Space, message } from "antd";
import { EyeOutlined, DownloadOutlined, DeleteOutlined } from "@ant-design/icons";

const StudentActions = ({ student, setStudents, user_id, showModal }) => {  // Use showModal function here
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/students/${id}`, { method: "DELETE" });

      if (response.ok) {
        setStudents((prev) => prev.filter((s) => s.user_id !== id));  // Use user_id for filtering
        message.success("Student deleted successfully");
      } else {
        throw new Error("Failed to delete student");
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  return (
    <Space size="middle">
      <Button
        icon={<EyeOutlined />}
        onClick={() => showModal(user_id)}  // Trigger modal when clicked
      />
      <Button icon={<DownloadOutlined />} onClick={() => message.info(`Downloading data for ${student.name}`)} />
      <Popconfirm
        title="Are you sure to delete this student?"
        onConfirm={() => handleDelete(user_id)}  // Pass user_id for deletion
        okText="Yes"
        cancelText="No"
      >
        <Button icon={<DeleteOutlined />} />
      </Popconfirm>
    </Space>
  );
};

export default StudentActions;
