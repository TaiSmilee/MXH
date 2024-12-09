import React, { useState, useEffect } from "react";
import { Table, Button, Space, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import StudentDetailsModal from "./StudentDetailsModal";
import AddStudentModal from "./AddStudentModal";
import StudentActions from "./StudentActions";
import { fetchAllStudents } from "./studentApi.js";

const StudentTable = () => {
  const [students, setStudents] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userId, setUserId] = useState(null);  // Store selected student user_id

  useEffect(() => {
    const getStudents = async () => {
      try {
        const studentsData = await fetchAllStudents();
        setStudents(studentsData);
      } catch (error) {
        message.error("Failed to load students.");
      }
    };
    getStudents();
  }, []);

  const showModal = (userId) => {
    setUserId(userId);  // Set the user_id when the modal is triggered
    setIsModalVisible(true);  // Show the modal
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);  // Hide the modal
  };

  const columns = [
    {
      title: "User ID",
      dataIndex: "user_id",
      key: "user_id",
      render: (text) => (
        <Button type="link" onClick={() => showModal(text)}>
          {text}
        </Button>
      ),
    },
    { title: "Name", dataIndex: "name", key: "name" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) =>
        status === 1 ? "Active" : status === 2 ? "At Risk" : "Inactive",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <StudentActions
          student={record}
          setStudents={setStudents}
          user_id={record.user_id}
          showModal={showModal}  // Pass showModal function to StudentActions
        />
      ),
    },
  ];

  return (
    <section>
      <h2>Student List</h2>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        style={{
          backgroundColor: "black",
          color: "white",
          borderColor: "black",
          marginBottom: 16,
          float: "right",
        }}
      >
        Add Student
      </Button>
      <Table columns={columns} dataSource={students} rowKey="user_id" pagination={false} />
      <StudentDetailsModal
        visible={isModalVisible}
        onClose={handleCloseModal}
        user_id={userId}  // Pass user_id to the modal
      />
      <AddStudentModal
        visible={false}
        onClose={() => {}}
        onAddStudent={() => {}}
      />
    </section>
  );
};

export default StudentTable;
