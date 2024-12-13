import React, { useEffect, useState } from "react";
import { fetchTasks, addTask, updateTask, deleteTask } from "./services/api";
import TaskForm from "./components/TaskForm";
import TaskTable from "./components/TaskTable";
import { Task } from "./types/types";
import { notification } from "antd";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  useEffect(() => {
    fetchTasks().then(setTasks);
  }, []);

  const handleAdd = async (task: Task) => {
    const newTask = await addTask(task);
    setTasks([...tasks, newTask]);
    notification.success({ message: "Task added successfully" });
  };

  const handleEdit = (id: number) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    if (taskToEdit) {
      setEditingTask(taskToEdit);
    }
  };

  const handleUpdate = async (updatedTask: Task) => {
    if (editingTask) {
      await updateTask(editingTask.id, updatedTask);
      setTasks(
        tasks.map((task) => (task.id === editingTask.id ? updatedTask : task))
      );
      setEditingTask(null);
      window.location.reload();
      notification.success({ message: "Task updated successfully" });
    }
  };

  const handleDelete = async (id: number) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task.id !== id));
    notification.success({ message: "Task deleted successfully" });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Task Management App</h1>
      <TaskForm
        onSubmit={editingTask ? handleUpdate : handleAdd}
        initialValues={editingTask}
      />
      <TaskTable tasks={tasks} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default App;
