# JobTrack MERN 🚀  
A modern **Job Application Tracking System** built using the **MERN stack**, designed to help users track, manage, and organize their job applications efficiently.

> ⚠️ Backend is currently under development. This repository currently contains a fully functional **frontend**.

---

## ✨ Features

### ✅ Authentication UI
- Login & Register pages
- Form validation using **Zod**
- Clean, responsive UI with Tailwind CSS

### ✅ Dashboard
- View all job applications in a table
- Add new job applications
- Edit existing job details
- Delete job entries
- Filter by job status
- Search by company or role
- Empty state handling

### ✅ UI Enhancements
- Toast notifications (success, info, error)
- Modal-based Add / Edit / Delete flows
- Dark / Light theme support
- Fully responsive layout

---

## 🛠 Tech Stack

### Frontend
- **React.js** (Vite)
- **Tailwind CSS**
- **React Router DOM**
- **Zod** (form validation)

### Backend (Coming Soon)
- Node.js
- Express.js
- MongoDB
- JWT Authentication

---

## 📂 Project Structure
jobtrack-mern/
│
├── jobtrack-frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── utils/
│ │ ├── validation/
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── vite.config.js
│ └── package.json
│
├── Jobtrack/ # Backend (to be added)
├── .gitignore
└── README.md


---

## 🚀 Getting Started (Frontend)

### 1️⃣ Clone the repository
git clone https://github.com/prashant2375/jobtrack-mern.git

2️⃣ Navigate to frontend
cd jobtrack-mern/jobtrack-frontend

3️⃣ Install dependencies
npm install

4️⃣ Start development server
npm run dev

App will run on:
http://localhost:5173

📌 Current Status
✅ Frontend UI complete
✅ Ready for backend integration
⏳ Backend implementation in progress

🧠 Future Improvements
JWT-based authentication
Backend API integration
Persistent database storage
User-specific job tracking
Pagination & sorting
Deployment (Vercel + Render)
