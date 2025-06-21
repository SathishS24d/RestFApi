# 🚀 Task: Build a RESTful API using Node.js and Express
This project is a simple RESTful API built using **Node.js** and **Express.js** for basic **User Management**. It demonstrates standard CRUD operations with in-memory data storage (no database).

## ✅ Features

* **GET** `/users` – Retrieve all users
* **GET** `/users/:id` – Retrieve a single user by ID
* **POST** `/user` – Add a new user with a unique ID
* **PUT** `/user/:id` – Update an existing user's information by ID
* **DELETE** `/user/:id` – Delete a user by ID

## 📌 API Endpoints

| Method | Endpoint     | Description                   |
| ------ | ------------ | ----------------------------- |
| GET    | `/users`     | Fetch all users               |
| GET    | `/users/:id` | Fetch a single user by ID     |
| POST   | `/user`      | Create a new user             |
| PUT    | `/user/:id`  | Update an existing user by ID |
| DELETE | `/user/:id`  | Delete a user by ID           |

## 🛠️ How to Run the Application

### 🔁 Option 1: Clone from GitHub

```bash
git clone https://github.com/SathishS24d/RestFApi.git
cd RestApi
npm install
npm run dev
```

### 📦 Option 2: Using ZIP File

1. Right-click on `RestApi.zip` and select **Extract Here**
2. Open the extracted folder in **VS Code**
3. Open a terminal and run the following commands:

```bash
npm install
npm run dev
```

## 📄 Notes

* Ensure that **Node.js** and **npm** are installed on your system.
* The app runs on the port specified in `.env` or defaults to `3000`.
