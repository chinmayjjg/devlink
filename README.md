# DevLink – A Developer Linktree + Resume API

DevLink is a backend project built using Node.js, Express, and MongoDB. It allows developers to store and retrieve a personal portfolio of links, projects, and resume data via a secure API.

---

## ✨ Features

- Developer can create a profile
- Add multiple custom links (like Linktree)
- Upload or link to resume
- JWT-based authentication
- MongoDB database for persistent storage
- RESTful API structure

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- JSON Web Tokens (JWT)
- dotenv for environment configuration

---

## 🚀 Getting Started

### 1. Clone the repo
git clone https://github.com/chinmayjjg/devlink.git
cd devlink-backend
2. Install dependencies

npm install
3. Add a .env file
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
4. Run the server

node server.js
🔐 API Endpoints (Example)
Method	Endpoint	Description
POST	/signup	Register a user
POST	/signin	Login and get token
GET	/profile	Get dev profile
POST	/links	Add new link
PUT	/resume	Update resume

📂 Project Structure

devlink-backend/
│
├── config/
│   └── db.js
├── controllers/
├── models/
├── routes/
├── middleware/
├── server.js
└── README.md
🙋‍♂️ Author
Chinmay Pradhan
📧 pradhanchinmay510@gmail.com
🔗 GitHub

📄 License
This project is licensed under the MIT License.
