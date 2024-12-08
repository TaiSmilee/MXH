import React, { useState, useEffect } from "react";
import { Table, Button, Space, Popconfirm, message, Modal, Input, Select } from "antd"; // Import Select
import { DownloadOutlined, EyeOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";


// Lấy dữ liệu sinh viên từ API
const fetchAllStudents = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/students"); // Địa chỉ API của bạn
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching students:", error);
    throw error;
  }
};

// Lấy dữ liệu chi tiết của sinh viên từ API
const fetchStudentDetails = async (studentId) => {
  try {
    const response = await fetch(`http://localhost:5000/api/students/${studentId}`);
    
    if (!response.ok) {
      throw new Error(`Error fetching student details: ${response.statusText}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    message.error("Failed to load student details.");
    throw error; // Re-throw to handle further if needed
  }
};

const StudentTable = () => {
  const [students, setStudents] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);  // Modal thêm sinh viên
  const [studentDetails, setStudentDetails] = useState(null);
  const [newStudent, setNewStudent] = useState({ name: "", department: "", gpa: "", status: 1 });  // Thông tin sinh viên mới

  // Lấy dữ liệu sinh viên khi component mount
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
  }, []); // Chạy 1 lần khi component được mount

  const handleStudentClick = async (studentId) => {
    try {
      const details = await fetchStudentDetails(studentId);
      setStudentDetails(details);
      setIsModalVisible(true); // Mở modal khi click vào sinh viên
    } catch (error) {
      message.error("Failed to load student details.");
    }
  };

  const handleDelete = (id) => {
    // Giả sử API đã được xây dựng để xóa sinh viên
    fetch(`http://localhost:5000/students/${id}`, {
      method: "DELETE",
    }).then(() => {
      setStudents(students.filter((student) => student.student_id !== id));
      message.success("Student deleted successfully");
    }).catch(() => {
      message.error("Failed to delete student");
    });
  };

  const handleAddStudent = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newStudent),
      });

      if (response.ok) {
        const studentData = await response.json();
        setStudents([...students, studentData]);
        setIsAddModalVisible(false); // Đóng modal sau khi thêm sinh viên
        setNewStudent({ name: "", department: "", gpa: "", status: 1 });  // Reset form
        message.success("Student added successfully");
      } else {
        message.error("Failed to add student.");
      }
    } catch (error) {
      console.error(error);
      message.error("Error adding student.");
    }
  };

  const columns = [
    {
      title: "Student ID",
      dataIndex: "student_id",
      key: "student_id",
      render: (text) => (
        <Button type="link" onClick={() => handleStudentClick(text)}>
          {text}
        </Button>
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "GPA",
      dataIndex: "gpa",
      key: "gpa",
      render: (text) => {
        const value = parseFloat(text);
        return isNaN(value) ? 'N/A' : value.toFixed(2); // Hiển thị GPA với 2 chữ số thập phân
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <span>
          {status === 1 ? "Active" : status === 2 ? "At Risk" : "Inactive"}
        </span>
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
            onConfirm={() => handleDelete(record.student_id)}
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
        onClick={() => setIsAddModalVisible(true)}  // Mở modal Add Student
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

      {/* Bảng hiển thị danh sách học sinh */}
      <Table
        columns={columns}
        dataSource={students}
        rowKey="student_id"
        pagination={false}
      />

      {/* Modal hiển thị thông tin chi tiết sinh viên */}
      <Modal
        title={`Details of Student ${studentDetails?.name}`}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        {studentDetails && (
  <div>
  <p><strong>Normal Click About:</strong> {studentDetails.normal_click_about}</p>
  <p><strong>Normal Click Courseware:</strong> {studentDetails.normal_click_courseware}</p>
  <p><strong>Normal Click Forum:</strong> {studentDetails.normal_click_forum}</p>
  <p><strong>Normal Click Progress:</strong> {studentDetails.normal_click_progress}</p>
  <p><strong>Normal Click Info:</strong> {studentDetails.normal_click_info}</p>
  <p><strong>Normal Close Courseware:</strong> {studentDetails.normal_close_courseware}</p>
  <p><strong>Normal Close Forum:</strong> {studentDetails.normal_close_forum}</p>
  <p><strong>Normal Create Comment:</strong> {studentDetails.normal_create_comment}</p>
  <p><strong>Normal Create Thread:</strong> {studentDetails.normal_create_thread}</p>
  <p><strong>Normal Delete Comment:</strong> {studentDetails.normal_delete_comment}</p>
  <p><strong>Normal Delete Thread:</strong> {studentDetails.normal_delete_thread}</p>
  <p><strong>Normal Load Video:</strong> {studentDetails.normal_load_video}</p>
  <p><strong>Normal Pause Video:</strong> {studentDetails.normal_pause_video}</p>
  <p><strong>Normal Play Video:</strong> {studentDetails.normal_play_video}</p>
  <p><strong>Normal Problem Check:</strong> {studentDetails.normal_problem_check}</p>
  <p><strong>Normal Problem Check Correct:</strong> {studentDetails.normal_problem_check_correct}</p>
  <p><strong>Normal Problem Check Incorrect:</strong> {studentDetails.normal_problem_check_incorrect}</p>
  <p><strong>Normal Problem Get:</strong> {studentDetails.normal_problem_get}</p>
  <p><strong>Normal Problem Save:</strong> {studentDetails.normal_problem_save}</p>
  <p><strong>Normal Reset Problem:</strong> {studentDetails.normal_reset_problem}</p>
  <p><strong>Normal Seek Video:</strong> {studentDetails.normal_seek_video}</p>
  <p><strong>Normal Stop Video:</strong> {studentDetails.normal_stop_video}</p>
  <p><strong>Sessions:</strong> {studentDetails.sessions}</p>
  <p><strong>Average Seconds:</strong> {studentDetails.avg_secs}</p>
</div>
        )}
      </Modal>

      {/* Modal thêm sinh viên */}
      <Modal
        title="Add New Student"
        visible={isAddModalVisible}
        onCancel={() => setIsAddModalVisible(false)}
        onOk={handleAddStudent}
        okText="Save"
        cancelText="Cancel"
      >
        <div>
          <Input
            placeholder="Name"
            value={newStudent.name}
            onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
            style={{ marginBottom: 10 }}
          />
          <Input
            placeholder="Department"
            value={newStudent.department}
            onChange={(e) => setNewStudent({ ...newStudent, department: e.target.value })}
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
            style={{ width: '100%' }}
          >
            <Select.Option value={1}>Active</Select.Option>
            <Select.Option value={2}>At Risk</Select.Option>
            <Select.Option value={3}>Inactive</Select.Option>
          </Select>
        </div>
      </Modal>
    </section>
  );
};

export default StudentTable;
