// Task Interface
interface Task {
    id: number;
    description: string;
    status: 'todo' | 'in progress' | 'done';
    createdAt: string;
    updatedAt: string;
} 

import { readTasks, writeTasks } from '../src/utils';

// Add a new task 
const addTask = (description: string): void => {
    const tasks = readTasks();
    const newTask: Task = {
        id: tasks.length + 1,
        description,
        status: 'todo',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    }
    tasks.push(newTask);
    writeTasks(tasks);
    console.log(`Task added succesfully (ID: ${newTask. id})`);
};