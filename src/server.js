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
app.get('/api/students/:user_id', (req, res) => {
  const { user_id } = req.params;
  const query = `
    SELECT 
        *
    FROM students
    WHERE user_id = ?
  `;

  // Thực hiện truy vấn MySQL
  db.execute(query, [user_id], (err, results) => {
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
  const query = "SELECT * FROM students";
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
