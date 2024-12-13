import axios from 'axios';
import { Task } from '../types/types';


const API_URL = 'https://675c6085fe09df667f63b390.mockapi.io/api/v1/tasks';

export const fetchTasks = async () => (await axios.get(API_URL)).data;

export const addTask = async (task: Task) => (await axios.post(API_URL, task)).data;

export const updateTask = async (id: number, task: Task) => (await axios.put(`${API_URL}/${id}`, task)).data;

export const deleteTask = async (id: number) => (await axios.delete(`${API_URL}/${id}`)).data;
