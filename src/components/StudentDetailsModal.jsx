import React, { useState, useEffect } from "react";
import { Modal, Spin, message, Button } from "antd";

const StudentDetailsModal = ({ visible, onClose, user_id }) => {
  const [studentDetails, setStudentDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);  // Trạng thái để lưu đường dẫn ảnh

  // Hàm gọi API để lấy thông tin chi tiết
  const fetchStudentDetails = async (user_id) => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:5000/api/students/${user_id}`);
      if (!response.ok) throw new Error("Failed to fetch student details");
      const data = await response.json();
      setStudentDetails(data);
    } catch (error) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Gọi API khi `user_id` thay đổi
  useEffect(() => {
    if (user_id) {
      fetchStudentDetails(user_id);
    }
  }, [user_id]);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  // Giả sử bạn có mã Python trả về hình ảnh
  const fetchImage = async () => {
    // Tải hình ảnh từ API hoặc từ đường dẫn
    const response = await fetch('http://localhost:5000/api/get-student-image'); // Đổi URL API nếu cần
    const imageUrl = await response.text(); // Giả sử bạn trả về đường dẫn ảnh từ API Python
    setImageSrc("https://ibom.vn/wp-content/uploads/2023/06/so-do-pert-4-800x400-1.png");
  };

  useEffect(() => {
    if (visible) {
      fetchImage(); // Gọi khi modal mở
    }
  }, [visible]);

  return (
    <Modal
      title={`Student Details`}
      visible={visible}
      onCancel={onClose}
      footer={null}
    >
      {loading ? (
        <Spin tip="Loading student details..." />
      ) : studentDetails ? (
        <div>
          <p><strong>Name:</strong> {studentDetails.name}</p>
          <p><strong>Enrollment ID:</strong> {studentDetails.enroll_id}</p>
          <p><strong>Status:</strong> {studentDetails.status === 1 ? "Active" : "Inactive"}</p>
          <p><strong>Sessions:</strong> {studentDetails.sessions}</p>
          <p><strong>Average Time (Secs):</strong> {studentDetails.avg_secs.toFixed(2)}</p>

          {/* Hiển thị thông tin phần ngắn */}
          {showMore ? (
            <>
              <p><strong>Click about:</strong> {studentDetails.click_about.toFixed(2)}</p>
              <p><strong>Click courseware:</strong> {studentDetails.click_courseware.toFixed(2)}</p>
              <p><strong>Click forum:</strong> {studentDetails.click_forum.toFixed(2)}</p>
              <p><strong>Click info:</strong> {studentDetails.click_info.toFixed(2)}</p>
              <p><strong>Click progress:</strong> {studentDetails.click_progress.toFixed(2)}</p>
              <p><strong>Close courseware:</strong> {studentDetails.close_courseware.toFixed(2)}</p>
              <p><strong>Close forum:</strong> {studentDetails.close_forum.toFixed(2)}</p>
              <p><strong>Create comment:</strong> {studentDetails.create_comment.toFixed(2)}</p>
              <p><strong>Create thread:</strong> {studentDetails.create_thread.toFixed(2)}</p>
              <p><strong>Delete comment:</strong> {studentDetails.delete_comment.toFixed(2)}</p>
              <p><strong>Delete thread:</strong> {studentDetails.delete_thread.toFixed(2)}</p>
              <p><strong>Load video:</strong> {studentDetails.load_video.toFixed(2)}</p>
              <p><strong>Pause video:</strong> {studentDetails.pause_video.toFixed(2)}</p>
              <p><strong>Play video:</strong> {studentDetails.play_video.toFixed(2)}</p>
              <p><strong>Problem check:</strong> {studentDetails.problem_check.toFixed(2)}</p>
              <p><strong>Problem check correct:</strong> {studentDetails.problem_check_correct.toFixed(2)}</p>
              <p><strong>Problem check incorrect:</strong> {studentDetails.problem_check_incorrect.toFixed(2)}</p>
              <p><strong>Problem get:</strong> {studentDetails.problem_get.toFixed(2)}</p>
              <p><strong>Problem save:</strong> {studentDetails.problem_save.toFixed(2)}</p>
              <p><strong>Reset problem:</strong> {studentDetails.reset_problem.toFixed(2)}</p>
              <p><strong>Seek video:</strong> {studentDetails.seek_video.toFixed(2)}</p>
              <p><strong>Stop video:</strong> {studentDetails.stop_video.toFixed(2)}</p>
              <p><strong>First action click courseware:</strong> {studentDetails.first_action_click_courseware.toFixed(2)}</p>
              <p><strong>First action click forum:</strong> {studentDetails.first_action_click_forum.toFixed(2)}</p>
              <p><strong>First action click info:</strong> {studentDetails.first_action_click_info.toFixed(2)}</p>
              <p><strong>First action click progress:</strong> {studentDetails.first_action_click_progress.toFixed(2)}</p>
              <p><strong>Last action click courseware:</strong> {studentDetails.last_action_click_courseware.toFixed(2)}</p>
              <p><strong>Last action click forum:</strong> {studentDetails.last_action_click_forum.toFixed(2)}</p>
              <p><strong>Last action click info:</strong> {studentDetails.last_action_click_info.toFixed(2)}</p>
              <p><strong>Last action click progress:</strong> {studentDetails.last_action_click_progress.toFixed(2)}</p>
            </>
          ) : (
            <p>Click "Show More" to see additional details.</p>
          )}

          {/* Nút show more */}
          <Button onClick={toggleShowMore}>
            {showMore ? "Show Less" : "Show More"}
          </Button>

          {/* Tiêu đề Network */}
          <h3>Network</h3>
          
          {/* Hiển thị ảnh từ URL */}
          {imageSrc ? (
            <img src={imageSrc} alt="Student Network" style={{ width: "100%", height: "auto", marginTop: "20px" }} />
          ) : (
            <p>Loading image...</p>
          )}
        </div>
      ) : (
        <p>No student details available.</p>
      )}
    </Modal>
  );
};

export default StudentDetailsModal;
