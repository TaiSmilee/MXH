import mysql from 'mysql2';

// Cấu hình kết nối
const db = mysql.createConnection({
  host: "localhost", // Địa chỉ máy chủ MySQL
  user: "root", // Tên người dùng MySQL
  password: "Anhnhi2004", // Mật khẩu MySQL
  database: "mydatabase", // Tên cơ sở dữ liệu
});

// Kết nối đến MySQL
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

// Sử dụng cú pháp ES Modules để xuất đối tượng db
export default db;
