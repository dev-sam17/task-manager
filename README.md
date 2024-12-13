# Task Management App

A simple Task Management Application built with **React.js**, **Ant Design**, and **TypeScript**. This app allows users to add, edit, delete, and view tasks with details like title, priority, due date, and status. It integrates with a mock REST API using **Axios** for API calls.

## Features

- **UI Features**:
  - Form to add and edit tasks.
  - Task Table with pagination displaying task title, priority, due date, status, and actions (Edit/Delete).
  - The ability to filter and manage tasks.
- **API Integration**:

  - Mock REST API (Mockapi.io).
  - CRUD operations (GET, POST, PUT, DELETE) to manage tasks.

- **State Management**:

  - React’s `useState` and `useEffect` hooks for state management.

- **Styling**:
  - Ant Design components for UI (Table, Form, Button, Select, DatePicker, Switch, Modal).
- **Bonus Features** (Optional):
  - Form validation using Ant Design’s `Form` component.
  - Use of Ant Design’s Notification component for user feedback (e.g., “Task added successfully”).
  - Deployment on platforms like **Vercel** or **Netlify**.

## Tech Stack

- **React.js** (Frontend)
- **TypeScript** (for type safety)
- **Ant Design** (UI library)
- **Axios** (API calls)
- **Mockapi.io** (Mock REST API)

## Setup Instructions

### Prerequisites

Make sure you have **Node.js** and **npm** installed on your system.

### 1. Clone the Repository

```bash
git clone https://github.com/dev-sam17/task-manager
cd task-management-app
```

### 2\. Install Dependencies

```
npm install
```

### 3\. Run the Application Locally

```
npm run dev
```

This will start the development server at http://localhost:5173.

### 4\. Build the Application

```
npm run build
```

This will generate static files in the build/ directory.

## API Endpoints

- **GET /tasks** - Fetch all tasks.
- **POST /tasks** - Add a new task.
- **PUT /tasks/:id** - Update an existing task.
- **DELETE /tasks/:id** - Delete a task.

### Mock API Integration

This app uses **MOCKAPI.io** as a mock API for tasks. The API can be replaced by a real backend when required.

## Example Task Object

```json
{
  "id": 1,
  "title": "Complete React project",
  "priority": "High",
  "dueDate": "2024-12-20",
  "status": "completed"
}
```
