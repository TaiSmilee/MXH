use mydatabase
CREATE TABLE Students (
    student_id VARCHAR(10) PRIMARY KEY,      -- ID của sinh viên
    enroll_id INT NOT NULL,                  -- ID khóa học mà sinh viên đăng ký
    name VARCHAR(100),                       -- Tên của sinh viên
    department VARCHAR(50),                  -- Khoa/Phòng ban
    gpa DECIMAL(3, 2),                       -- Điểm GPA
    status INT,                              -- Trạng thái (0: Inactive, 1: At Risk, 2: Active)
    normal_click_about INT DEFAULT 0,
    normal_click_courseware INT DEFAULT 0,
    normal_click_forum INT DEFAULT 0,
    normal_click_progress INT DEFAULT 0,
    normal_click_info INT DEFAULT 0,
    normal_close_courseware INT DEFAULT 0,
    normal_close_forum INT DEFAULT 0,
    normal_create_comment INT DEFAULT 0,
    normal_create_thread INT DEFAULT 0,
    normal_delete_comment INT DEFAULT 0,
    normal_delete_thread INT DEFAULT 0,
    normal_load_video INT DEFAULT 0,
    normal_pause_video INT DEFAULT 0,
    normal_play_video INT DEFAULT 0,
    normal_problem_check INT DEFAULT 0,
    normal_problem_check_correct INT DEFAULT 0,
    normal_problem_check_incorrect INT DEFAULT 0,
    normal_problem_get INT DEFAULT 0,
    normal_problem_save INT DEFAULT 0,
    normal_reset_problem INT DEFAULT 0,
    normal_seek_video INT DEFAULT 0,
    normal_stop_video INT DEFAULT 0,
    sessions INT DEFAULT 0,                  -- Số lần truy cập
    avg_secs DECIMAL(10, 2) DEFAULT 0.00     -- Thời gian trung bình truy cập (giây)
);
INSERT INTO Students (student_id, enroll_id, name, department, gpa, status) VALUES
('S001', 1, 'Nguyễn Văn A', 'Công nghệ thông tin', 3.50, 2),
('S002', 1, 'Trần Thị B', 'Khoa học máy tính', 3.80, 2),
('S003', 2, 'Phạm Văn C', 'Kỹ thuật phần mềm', 2.90, 1),
('S004', 2, 'Lê Minh D', 'Trí tuệ nhân tạo', 3.70, 2),
('S005', 3, 'Hoàng Văn E', 'An toàn thông tin', 3.20, 2),
('S006', 3, 'Phan Thị F', 'Hệ thống thông tin', 2.70, 1),
('S007', 4, 'Đặng Văn G', 'Điện tử viễn thông', 3.40, 2),
('S008', 4, 'Ngô Thị H', 'Công nghệ đa phương tiện', 3.10, 2),
('S009', 5, 'Vũ Minh I', 'Công nghệ thông tin', 3.50, 0),
('S010', 5, 'Dương Văn K', 'Truyền thông số', 3.60, 2),
('S011', 6, 'Đỗ Văn L', 'Trí tuệ nhân tạo', 3.80, 2),
('S012', 6, 'Trịnh Thị M', 'Hệ thống thông tin', 2.95, 1),
('S013', 7, 'Nguyễn Văn N', 'Kỹ thuật phần mềm', 3.00, 0),
('S014', 7, 'Lê Thị O', 'Công nghệ thông tin', 3.65, 2),
('S015', 8, 'Phạm Văn P', 'An toàn thông tin', 2.75, 1),
('S016', 8, 'Hoàng Thị Q', 'Điện tử viễn thông', 3.40, 2),
('S017', 9, 'Đặng Văn R', 'Truyền thông số', 3.20, 2),
('S018', 9, 'Ngô Thị S', 'Công nghệ đa phương tiện', 3.10, 0),
('S019', 10, 'Vũ Văn T', 'Trí tuệ nhân tạo', 3.80, 2),
('S020', 10, 'Dương Thị U', 'Khoa học máy tính', 2.85, 1),
('S021', 11, 'Đỗ Minh V', 'Hệ thống thông tin', 3.50, 2),
('S022', 11, 'Trịnh Văn W', 'An toàn thông tin', 3.15, 2),
('S023', 12, 'Nguyễn Thị X', 'Trí tuệ nhân tạo', 2.80, 0),
('S024', 12, 'Lê Văn Y', 'Khoa học máy tính', 3.70, 2),
('S025', 13, 'Phạm Minh Z', 'Công nghệ thông tin', 3.90, 2),
('S026', 13, 'Hoàng Thị AA', 'Kỹ thuật phần mềm', 2.95, 1),
('S027', 14, 'Đặng Văn AB', 'An toàn thông tin', 3.25, 2),
('S028', 14, 'Ngô Minh AC', 'Công nghệ đa phương tiện', 3.15, 0),
('S029', 15, 'Vũ Văn AD', 'Truyền thông số', 3.60, 2),
('S030', 15, 'Dương Thị AE', 'Hệ thống thông tin', 3.20, 1),
('S031', 16, 'Đỗ Văn AF', 'Công nghệ thông tin', 2.75, 0),
('S032', 16, 'Trịnh Thị AG', 'An toàn thông tin', 3.55, 2),
('S033', 17, 'Nguyễn Văn AH', 'Kỹ thuật phần mềm', 3.10, 2),
('S034', 17, 'Lê Thị AI', 'Trí tuệ nhân tạo', 3.45, 2),
('S035', 18, 'Phạm Văn AJ', 'Công nghệ thông tin', 2.80, 1),
('S036', 18, 'Hoàng Thị AK', 'Điện tử viễn thông', 3.30, 2),
('S037', 19, 'Đặng Văn AL', 'Khoa học máy tính', 3.75, 2),
('S038', 19, 'Ngô Văn AM', 'Truyền thông số', 3.50, 0),
('S039', 20, 'Vũ Minh AN', 'Hệ thống thông tin', 3.40, 2),
('S040', 20, 'Dương Thị AO', 'Công nghệ đa phương tiện', 3.60, 2);


CREATE TABLE Courses (
    CourseID VARCHAR(10) PRIMARY KEY, -- Course ID
    Title VARCHAR(255) NOT NULL, -- Course Title
    Instructor VARCHAR(255) NOT NULL, -- Instructor Name
    Duration VARCHAR(50) NOT NULL, -- Duration (e.g., "5 hours")
    StartDate DATE NOT NULL, -- Start Date
    EndDate DATE NOT NULL, -- End Date
    CourseType VARCHAR(50) NOT NULL, -- Course Type (e.g., Online, Offline, Hybrid)
    Category VARCHAR(100) NOT NULL -- Category (e.g., Web Development, Data Science)
);
INSERT INTO Courses (CourseID, Title, Instructor, Duration, StartDate, EndDate, CourseType, Category)
VALUES 
('C001', 'React for Beginners', 'John Doe', '5 hours', '2024-12-01', '2024-12-15', 'Online', 'Web Development'),
('C002', 'Advanced JavaScript', 'Jane Smith', '10 hours', '2024-12-05', '2024-12-20', 'Offline', 'Programming'),
('C003', 'Data Science with Python', 'Emily Davis', '8 hours', '2024-12-10', '2024-12-25', 'Online', 'Data Science'),
('C004', 'UI/UX Design', 'David Brown', '6 hours', '2024-12-15', '2024-12-30', 'Offline', 'Design'),
('C005', 'Machine Learning Basics', 'Michael Johnson', '12 hours', '2024-12-10', '2024-12-20', 'Online', 'Artificial Intelligence'),
('C006', 'Full-Stack Web Development', 'Sarah Lee', '15 hours', '2024-12-05', '2024-12-25', 'Hybrid', 'Web Development'),
('C007', 'Introduction to Cybersecurity', 'James Wilson', '8 hours', '2024-12-12', '2024-12-22', 'Online', 'Cybersecurity');

CREATE TABLE Enrollment (
    enrollment_id INT AUTO_INCREMENT PRIMARY KEY, -- Unique ID for each enrollment
    student_id VARCHAR(10) NOT NULL,              -- ID of the student
    course_id VARCHAR(10) NOT NULL,               -- ID of the course
    enrollment_date DATE NOT NULL DEFAULT (CURRENT_DATE), -- Date of enrollment
    status ENUM('Enrolled', 'Completed', 'Dropped') DEFAULT 'Enrolled', -- Enrollment status
    FOREIGN KEY (student_id) REFERENCES Students(student_id) ON DELETE CASCADE, -- Links to Students
    FOREIGN KEY (course_id) REFERENCES Courses(CourseID) ON DELETE CASCADE      -- Links to Courses
);

UPDATE Students
SET 
    normal_click_about = 10,
    normal_click_courseware = 15,
    normal_click_forum = 5,
    normal_click_progress = 20,
    normal_click_info = 12,
    normal_close_courseware = 8,
    normal_close_forum = 3,
    normal_create_comment = 4,
    normal_create_thread = 2,
    normal_delete_comment = 1,
    normal_delete_thread = 0,
    normal_load_video = 25,
    normal_pause_video = 18,
    normal_play_video = 30,
    normal_problem_check = 20,
    normal_problem_check_correct = 15,
    normal_problem_check_incorrect = 5,
    normal_problem_get = 10,
    normal_problem_save = 8,
    normal_reset_problem = 3,
    normal_seek_video = 12,
    normal_stop_video = 10,
    sessions = 50,
    avg_secs = 120.50
WHERE student_id IN ('S001', 'S002', 'S003', 'S004', 'S005', 'S006', 'S007', 'S008', 'S009', 'S010');

SELECT 
  student_id, enroll_id, name, department, gpa, status,
  normal_click_about, normal_click_courseware, normal_click_forum, normal_click_progress,
  normal_click_info, normal_close_courseware, normal_close_forum, normal_create_comment,
  normal_create_thread, normal_delete_comment, normal_delete_thread, normal_load_video,
  normal_pause_video, normal_play_video, normal_problem_check, normal_problem_check_correct,
  normal_problem_check_incorrect, normal_problem_get, normal_problem_save, normal_reset_problem,
  normal_seek_video, normal_stop_video, sessions, avg_secs
FROM Students
WHERE student_id = 'S001';
