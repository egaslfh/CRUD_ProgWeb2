const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;


// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('../public'));

// In-memory database
let students = [
  { id: 1, nama: 'Ahmad Rizki', jurusan: 'Teknik Informatika', semester: 4 },
  { id: 2, nama: 'Siti Nurhaliza', jurusan: 'Teknik Komputer', semester: 3 },
  { id: 3, nama: 'Budi Santoso', jurusan: 'Sistem Informasi', semester: 5 }
];

let nextId = 4;

// *******************
// GET - Read All Data
// *******************
app.get('/api/students', (req, res) => {
  res.json({
    status: 'success',
    message: 'Data berhasil diambil',
    data: students
  });
});

// *******************
// GET - Read Single Data
// *******************
app.get('/api/students/:id', (req, res) => {
  const { id } = req.params;
  const student = students.find(s => s.id === parseInt(id));
  
  if (!student) {
    return res.status(404).json({
      status: 'error',
      message: `Data dengan ID ${id} tidak ditemukan`,
      data: null
    });
  }
  
  res.json({
    status: 'success',
    message: 'Data berhasil diambil',
    data: student
  });
});

// *******************
// POST - Create Data
// *******************
app.post('/api/students', (req, res) => {
  const { nama, jurusan, semester } = req.body;
  
  if (!nama || !jurusan || !semester) {
    return res.status(400).json({
      status: 'error',
      message: 'Nama, jurusan, dan semester harus diisi',
      data: null
    });
  }
  
  const newStudent = {
    id: nextId++,
    nama,
    jurusan,
    semester
  };
  
  students.push(newStudent);
  
  res.status(201).json({
    status: 'success',
    message: 'Data berhasil ditambahkan',
    data: newStudent
  });
});

// *******************
// PUT - Update Data
// *******************
app.put('/api/students/:id', (req, res) => {
  const { id } = req.params;
  const { nama, jurusan, semester } = req.body;
  
  const studentIndex = students.findIndex(s => s.id === parseInt(id));
  
  if (studentIndex === -1) {
    return res.status(404).json({
      status: 'error',
      message: `Data dengan ID ${id} tidak ditemukan`,
      data: null
    });
  }
  
  if (!nama || !jurusan || !semester) {
    return res.status(400).json({
      status: 'error',
      message: 'Nama, jurusan, dan semester harus diisi',
      data: null
    });
  }
  
  students[studentIndex] = {
    id: parseInt(id),
    nama,
    jurusan,
    semester
  };
  
  res.json({
    status: 'success',
    message: 'Data berhasil diperbarui',
    data: students[studentIndex]
  });
});

// *******************
// DELETE - Delete Data
// *******************
app.delete('/api/students/:id', (req, res) => {
  const { id } = req.params;
  
  const studentIndex = students.findIndex(s => s.id === parseInt(id));
  
  if (studentIndex === -1) {
    return res.status(404).json({
      status: 'error',
      message: `Data dengan ID ${id} tidak ditemukan`,
      data: null
    });
  }
  
  const deletedStudent = students.splice(studentIndex, 1);
  
  res.json({
    status: 'success',
    message: 'Data berhasil dihapus',
    data: deletedStudent[0]
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
