export const fetchAllStudents = async () => {
    const response = await fetch("http://localhost:5000/api/students");
    return await response.json();
  };
  
  export const fetchStudentDetails = async (studentId) => {
    const response = await fetch(`http://localhost:5000/api/students/${studentId}`);
    if (!response.ok) throw new Error("Failed to fetch student details");
    return await response.json();
  };
  