import React, { useEffect } from "react";
import { Form, Input, Select, DatePicker, Switch, Button } from "antd";
import dayjs from "dayjs";
import { Task } from "../types/types";

interface TaskFormProps {
  onSubmit: (task: Task) => void;
  initialValues?: Task | null;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, initialValues }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue({
        ...initialValues,
        dueDate: initialValues.dueDate ? dayjs(initialValues.dueDate) : null,
      });
    } else {
      form.resetFields();
    }
  }, [initialValues, form]);

  const handleFinish = (values: any) => {
    const task = {
      ...values,
      dueDate: values.dueDate ? values.dueDate.format("YYYY-MM-DD") : null,
    };
    onSubmit(task);
    form.resetFields();
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleFinish}>
      <Form.Item
        name="title"
        label="Task Title"
        rules={[{ required: true, message: "Task Title is required" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="priority" label="Priority" rules={[{ required: true }]}>
        <Select
          options={[{ value: "High" }, { value: "Medium" }, { value: "Low" }]}
        />
      </Form.Item>
      <Form.Item name="dueDate" label="Due Date" rules={[{ required: true }]}>
        <DatePicker />
      </Form.Item>
      <Form.Item name="status" label="Status" valuePropName="checked">
        <Switch checkedChildren="Completed" unCheckedChildren="Not Completed" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          {initialValues ? "Update Task" : "Add Task"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TaskForm;
