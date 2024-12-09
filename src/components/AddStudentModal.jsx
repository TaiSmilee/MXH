import React, { useState } from "react";
import { Modal, Input, Select, message } from "antd";

const { Option } = Select;

const AddStudentModal = ({ visible, onClose, onAddStudent }) => {
  const [newStudent, setNewStudent] = useState({
    name: "",
    department: "",
    gpa: "",
    status: 1,
  });

  const handleSave = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newStudent),
      });

      if (response.ok) {
        const studentData = await response.json();
        onAddStudent(studentData);
        onClose();
        setNewStudent({ name: "", department: "", gpa: "", status: 1 });
        message.success("Student added successfully");
      } else {
        throw new Error("Failed to add student");
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  return (
    <Modal
      title="Add New Student"
      visible={visible}
      onCancel={onClose}
      onOk={handleSave}
      okText="Save"
      cancelText="Cancel"
    >
      <Input
        placeholder="Name"
        value={newStudent.name}
        onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
        style={{ marginBottom: 10 }}
      />
      <Input
        placeholder="Department"
        value={newStudent.department}
        onChange={(e) =>
          setNewStudent({ ...newStudent, department: e.target.value })
        }
        style={{ marginBottom: 10 }}
      />
      <Input
        placeholder="GPA"
        type="number"
        value={newStudent.gpa}
        onChange={(e) => setNewStudent({ ...newStudent, gpa: e.target.value })}
        style={{ marginBottom: 10 }}
      />
      <Select
        value={newStudent.status}
        onChange={(value) => setNewStudent({ ...newStudent, status: value })}
        style={{ width: "100%" }}
      >
        <Option value={1}>Active</Option>
        <Option value={2}>At Risk</Option>
        <Option value={3}>Inactive</Option>
      </Select>
    </Modal>
  );
};

export default AddStudentModal;
