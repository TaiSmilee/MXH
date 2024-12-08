import mysql from 'mysql2';

// Cấu hình kết nối
const connection = mysql.createConnection({
  host: "localhost", // Địa chỉ MySQL server
  user: "root", // Tên người dùng MySQL
  password: "Anhnhi2004", // Mật khẩu
  database: "mydatabase", // Tên cơ sở dữ liệu
});

// Kết nối và kiểm tra
connection.connect((err) => {
  if (err) {
    console.error("Kết nối MySQL thất bại:", err.message);
    return;
  }
  console.log("Kết nối MySQL thành công!");
});

// Thực hiện truy vấn mẫu để kiểm tra
connection.query("SELECT 1 + 1 AS result", (err, results) => {
  if (err) {
    console.error("Lỗi khi thực hiện truy vấn:", err.message);
    return;
  }
  console.log("Kết quả truy vấn mẫu:", results);
});

// Đóng kết nối
connection.end();
