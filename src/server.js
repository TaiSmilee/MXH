import express from 'express';
import db from './mysql.js';  // Đảm bảo mysql.js nằm trong thư mục src
import cors from 'cors';

const app = express();
const port = 5000;

// Cấu hình CORS để cho phép truy cập từ frontend (localhost:5173)
app.use(cors({
  origin: 'http://localhost:5173'  // Chỉ cho phép truy cập từ frontend trên cổng 5173
}));

// Middleware để parse JSON body (nếu cần)
app.use(express.json());

// Endpoint lấy thông tin chi tiết của sinh viên
app.get('/api/students/:studentId', (req, res) => {
  const { studentId } = req.params;
  const query = `
    SELECT 
      student_id, enroll_id, name, department, gpa, status,
      normal_click_about, normal_click_courseware, normal_click_forum, normal_click_progress,
      normal_click_info, normal_close_courseware, normal_close_forum, normal_create_comment,
      normal_create_thread, normal_delete_comment, normal_delete_thread, normal_load_video,
      normal_pause_video, normal_play_video, normal_problem_check, normal_problem_check_correct,
      normal_problem_check_incorrect, normal_problem_get, normal_problem_save, normal_reset_problem,
      normal_seek_video, normal_stop_video, sessions, avg_secs
    FROM Students
    WHERE student_id = ?
  `;

  // Thực hiện truy vấn MySQL
  db.execute(query, [studentId], (err, results) => {
    if (err) {
      console.error("Error fetching student details from database", err);
      res.status(500).json({ error: "Failed to fetch student details" });
    } else {
      if (results.length > 0) {
        res.json(results[0]);
      } else {
        res.status(404).json({ message: "Student not found" });
      }
    }
  });
});

// Định nghĩa một endpoint để lấy dữ liệu từ bảng Students
app.get('/api/students', (req, res) => {
  const query = "SELECT * FROM Students";
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Failed to fetch students' });
    } else {
      res.json(results);
    }
  });
});

// Endpoint gốc, để kiểm tra API
app.get('/', (req, res) => {
  res.send('Xin chào'); // Trả về thông điệp "Xin chào"
});

// Lắng nghe tại cổng 5000
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
