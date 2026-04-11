# 📚 CRUD Application with REST Client Testing

Aplikasi CRUD lengkap dengan Node.js/Express dan HTTP Testing menggunakan REST Client.

## 📋 Fitur

✅ **GET** - Mengambil semua data / data satuan  
✅ **POST** - Membuat data baru  
✅ **PUT** - Mengupdate data  
✅ **DELETE** - Menghapus data  
✅ **REST Client** - File `.http` untuk testing API  
✅ **Web Interface** - Dashboard interaktif untuk CRUD  

---

## 🚀 Cara Menjalankan

### 1. Install Dependencies
```bash
cd crud-app
npm install
```

### 2. Jalankan Server
```bash
npm start
```
atau untuk development dengan auto-reload:
```bash
npm run dev
```

Server akan berjalan di: **http://localhost:3000**

### 3. Akses Aplikasi
- **Web Interface**: http://localhost:3000
- **API Base**: http://localhost:3000/api

---

## 📝 API Endpoints

### GET - Mengambil Data

**Ambil Semua Data**
```http
GET http://localhost:3000/api/students
```

**Ambil Data Satuan (berdasarkan ID)**
```http
GET http://localhost:3000/api/students/1
```

### POST - Membuat Data

```http
POST http://localhost:3000/api/students
Content-Type: application/json

{
  "nama": "Nama Mahasiswa",
  "jurusan": "Teknik Informatika",
  "semester": 4
}
```

### PUT - Update Data

```http
PUT http://localhost:3000/api/students/1
Content-Type: application/json

{
  "nama": "Nama Diperbarui",
  "jurusan": "Sistem Informasi",
  "semester": 5
}
```

### DELETE - Hapus Data

```http
DELETE http://localhost:3000/api/students/1
```

---

## 🧪 Testing dengan REST Client

### Install VS Code Extension
1. Buka VS Code
2. Buka Extensions (Ctrl+Shift+X)
3. Cari **REST Client** oleh Huachao Mao
4. Klik Install

### Menggunakan File test.http

1. Buka file `test.http` di VS Code
2. Klik **Send Request** pada setiap request yang ingin ditest
3. Lihat response di panel kanan

Contoh lengkap ada di file `test.http` dengan berbagai skenario testing:
- ✅ GET all students
- ✅ GET single student
- ✅ GET non-existent student (error handling)
- ✅ POST create new student
- ✅ POST with incomplete data (error handling)
- ✅ PUT update student
- ✅ DELETE student
- ✅ Dan banyak lagi...

---

## 📁 Struktur Project

```
crud-app/
├── src/
│   └── server.js          # Express server dengan API endpoints
├── public/
│   └── index.html         # Web interface
├── test.http              # REST Client testing file
├── package.json           # Dependencies
└── README.md              # Dokumentasi
```

---

## 🛠️ Teknologi yang Digunakan

- **Node.js** - Runtime
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **Body Parser** - Middleware untuk parsing JSON
- **REST Client** - VS Code extension untuk testing

---

## 📊 Contoh Response

### Success Response
```json
{
  "status": "success",
  "message": "Data berhasil diambil",
  "data": {
    "id": 1,
    "nama": "Ahmad Rizki",
    "jurusan": "Teknik Informatika",
    "semester": 4
  }
}
```

### Error Response
```json
{
  "status": "error",
  "message": "Data dengan ID 999 tidak ditemukan",
  "data": null
}
```

---

## 🎯 Catatan Penting

- Data disimpan in-memory (hilang saat server restart)
- ID auto-increment dimulai dari 4 (karena ada 3 data awal)
- Validasi: semua field (nama, jurusan, semester) harus diisi
- CORS diaktifkan untuk akses dari frontend

---

## 👨‍💻 Author
Ega Pratama - Semester 4 - Progweb2

---

## 📞 Support
Untuk pertanyaan atau kendala, silakan buka issue di repository.
