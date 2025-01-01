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

// Update an existing task
const updateTask = (id: number, description: string): void => {
    const tasks = readTasks();
    const task = tasks.find((t) => t.id === id);
    if(!task) {
        console.log(`No task with ID ${id} found`);
        return;
    }
    task.description = description;
    task.updatedAt = new Date().toISOString();
    writeTasks(tasks);
    console.log('Task updated succesfully');
};

// Delete a task
const deleteTask = (id: number): void => {
    const tasks = readTasks();
    const updatedTasks = tasks.filter((t) => t.id !==id);
    writeTasks(updatedTasks)
    console.log('Task deleted succesfully');
}

// Mark a task's status as 'todo' | 'in progress' | 'done'
const markTask = (id: number, status: 'in-progress' | 'done'): void => {
    const tasks = readTasks();
    const task = tasks.find((t) => t.id === id);
    if(!task) {
        console.log(`No task found with ID ${id}`);
        return;
    }
    task.status = status;
    task.updatedAt = new Date().toISOString();
    writeTasks(tasks);
    console.log(`Task marked as ${status} (ID: ${id})`);
}

//List tasks
const listTasks = (status?: 'todo' | 'in progress' | 'done'): void => {
    const tasks = readTasks();
    const filteredTasks = status ? tasks.filter((t) => t.status === status) : tasks;
    console.log(filteredTasks);
}

