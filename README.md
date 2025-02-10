**Virtual Study Group Platform**
A collaborative platform designed for virtual study groups to enhance productivity by scheduling meetings, sharing resources, and receiving notifications.

**Features**

*📅 Scheduler for Virtual Meetings*: Schedule and manage study sessions with a calendar.

*📝 Shared Space for Notes and Resources8*: Upload, view, and share study materials with group members.

*🔔 Notifications*: Stay updated with email or in-app notifications for scheduled events and new resources.

**Tech Stack**
Frontend: React.js, TailwindCSS
Backend: Node.js, Express.js
Database: MongoDB
Notifications: React Toastify, Nodemailer
Getting Started
Prerequisites
Node.js
MongoDB

**Installation**

**Clone the repository:**

git clone <repository_url>
cd virtual-study-group
Install dependencies:
bash
npm install

**Set up environment variables: Create a .env file in the root directory and include:**

MONGODB_URI=mongodb://localhost:27017/virtualstudy
PORT=5000
Running the Application
Start the backend server:
npm run dev

**Start the frontend development server:**

cd client
npm start
Endpoints
Meeting Scheduler
POST /api/meetings/schedule - Schedule a meeting.
Request body: { date: "YYYY-MM-DD", userId: "string" }
GET /api/meetings - Retrieve all scheduled meetings.
Shared Notes
POST /api/notes - Save a note.
Request body: { content: "string", userId: "string" }
GET /api/notes - Retrieve all notes.
Contributing
Contributions are welcome! Please follow these steps:

**contact**

If you have any questions or suggestions, please contact [Bravo] at [orinabravin6@gmail.com.
