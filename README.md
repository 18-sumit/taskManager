# Task Manager Application

A full-stack task management application built with a React frontend (Vite + Tailwind CSS) and a Node.js/Express backend. The application features a simple role-based system where an "Admin" can manage all tasks, and regular users can view and update tasks assigned to them.

## Features

-   **CRUD Functionality:** Create, Read, Update, and Delete tasks.
-   **Role-Based Access:**
    -   **Admin View:** Can see all tasks, create new tasks, assign tasks, filter tasks, and delete any task.
    -   **User View:** Can only see tasks assigned to them and can only update the status of their tasks.
-   **Simple Authentication:** Enter a name to log in. Use the name "Admin" for administrative privileges.
-   **Modern UI:** A clean and responsive interface built with React and styled with Tailwind CSS.
-   **Filtering:** Admins can filter tasks by assignee and status.

---

## Setup and Installation

Follow these steps to get the project running on your local machine.

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18.x or later recommended)
-   [npm](https://www.npmjs.com/) (comes with Node.js)
-   [MongoDB](https://www.mongodb.com/try/download/community) (You need a running MongoDB instance or a connection string from MongoDB Atlas)

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd task_manager
```

### 2. Backend Setup

The backend server connects to the database and provides the API for the frontend.

```bash
# Navigate to the backend directory
cd backend

# Install dependencies
npm install

# Create an environment file
# Create a new file named .env in the backend directory and add the following variables:
```

#### `backend/.env` file

```env
PORT=8080
MONGO_URI=your_mongodb_connection_string
```

-   `PORT`: The port on which the backend server will run.
-   `MONGO_URI`: Your connection string for the MongoDB database.

```bash
# Start the backend server
npm start
```

The backend server should now be running on `http://localhost:8080`.

### 3. Frontend Setup

The frontend is a React application built with Vite.

```bash
# Open a new terminal and navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Start the frontend development server
npm run dev
```

The frontend application should now be running and accessible at `http://localhost:5173`.

### 4. How to Use the App

1.  Open your browser and go to `http://localhost:5173`.
2.  You will see a "Name Entry" screen.
    -   To log in as an **Admin**, enter the name `Admin`.
    -   To log in as a **User**, enter any other name (e.g., "Virat", "Sumit"). This user will be created implicitly.
3.  As an Admin, you can create tasks and assign them to users by typing their names in the "Assign To" field.

---

## API Documentation

The backend provides the following RESTful API endpoints.

**Base URL:** `http://localhost:8080/api`

### Task Endpoints

#### 1. Get All Tasks

-   **Endpoint:** `GET /tasks`
-   **Description:** Retrieves a list of all tasks in the database.
-   **Response (200 OK):**
    ```json
    [
      {
        "_id": "60d5f2c7f5a6e4a8e0a3e8b1",
        "title": "Deploy the application",
        "description": "Deploy the final version to the production server.",
        "assignedTo": "Admin",
        "status": "In progress",
        "createdAt": "2025-06-20T12:00:00.000Z"
      },
      {
        "_id": "60d5f2c7f5a6e4a8e0a3e8b2",
        "title": "Make a login form for user",
        "description": "Add setup instructions.",
        "assignedTo": "Virat",
        "status": "To do",
        "createdAt": "2025-06-20T12:05:00.000Z"
      }
    ]
    ```

#### 2. Create a New Task

-   **Endpoint:** `POST /tasks`
-   **Description:** Adds a new task to the database.
-   **Request Body:**
    ```json
    {
      "title": "Design new logo",
      "description": "Create a modern and fresh logo for the project.",
      "assignedTo": "Sumit"
    }
    ```
-   **Response (201 Created):**
    ```json
    {
      "_id": "60d5f2c7f5a6e4a8e0a3e8b3",
      "title": "Design new logo",
      "description": "Create a modern and fresh logo for the project.",
      "assignedTo": "Sumit",
      "status": "To do",
      "createdAt": "2025-06-20T12:10:00.000Z"
    }
    ```

#### 3. Update Task Status

-   **Endpoint:** `PATCH /tasks/:id`
-   **Description:** Updates the status of a specific task.
-   **URL Parameters:** `id` (The ID of the task to update)
-   **Request Body:**
    ```json
    {
      "status": "Done"
    }
    ```
-   **Response (200 OK):**
    ```json
    {
      "_id": "60d5f2c7f5a6e4a8e0a3e8b2",
      "title": "Update README file",
      "description": "Add setup instructions and API documentation.",
      "assignedTo": "Virat",
      "status": "Done",
      "createdAt": "2025-06-20T12:05:00.000Z"
    }
    ```

#### 4. Delete a Task

-   **Endpoint:** `DELETE /tasks/:id`
-   **Description:** Deletes a task from the database. (Admin only)
-   **URL Parameters:** `id` (The ID of the task to delete)
-   **Response (200 OK):**
    ```json
    {
      "message": "Task deleted successfully"
    }
    ```