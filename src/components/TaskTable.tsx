import React from "react";
import { Table, Button } from "antd";
import { ColumnsType } from "antd/es/table";
import { Task } from "../types/types";

interface TaskTableProps {
  tasks: Task[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskTable: React.FC<TaskTableProps> = ({ tasks, onEdit, onDelete }) => {
  const sortedTasks = [...tasks].sort((a, b) => b.id - a.id);

  const columns: ColumnsType<Task> = [
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Priority", dataIndex: "priority", key: "priority" },
    { title: "Due Date", dataIndex: "dueDate", key: "dueDate" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (status ? "Completed" : "Not Completed"),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <>
          <Button type="link" onClick={() => onEdit(record.id)}>
            Edit
          </Button>
          <Button type="link" danger onClick={() => onDelete(record.id)}>
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <Table
      dataSource={sortedTasks}
      columns={columns}
      pagination={{ pageSize: 5 }}
      rowKey="id"
    />
  );
};

export default TaskTable;
