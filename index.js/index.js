"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../src/utils");
// Add a new task 
const addTask = (description) => {
    const tasks = (0, utils_1.readTasks)();
    const newTask = {
        id: tasks.length + 1,
        description,
        status: 'todo',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    };
    tasks.push(newTask);
    (0, utils_1.writeTasks)(tasks);
    console.log(`Task added succesfully (ID: ${newTask.id})`);
};
// Update an existing task
const updateTask = (id, description) => {
    const tasks = (0, utils_1.readTasks)();
    const task = tasks.find((t) => t.id === id);
    if (!task) {
        console.log(`No task with ID ${id} found`);
        return;
    }
    task.description = description;
    task.updatedAt = new Date().toISOString();
    (0, utils_1.writeTasks)(tasks);
    console.log('Task updated succesfully');
};
// Delete a task
const deleteTask = (id) => {
    const tasks = (0, utils_1.readTasks)();
    const updatedTasks = tasks.filter((t) => t.id !== id);
    (0, utils_1.writeTasks)(updatedTasks);
    console.log('Task deleted succesfully');
};
// Mark a task's status as 'todo' | 'in progress' | 'done'
const markTask = (id, status) => {
    const tasks = (0, utils_1.readTasks)();
    const task = tasks.find((t) => t.id === id);
    if (!task) {
        console.log(`No task found with ID ${id}`);
        return;
    }
    task.status = status;
    task.updatedAt = new Date().toISOString();
    (0, utils_1.writeTasks)(tasks);
    console.log(`Task marked as ${status} (ID: ${id})`);
};
//List tasks
const listTasks = (status) => {
    const tasks = (0, utils_1.readTasks)();
    const filteredTasks = status ? tasks.filter((t) => t.status === status) : tasks;
    console.log(filteredTasks);
};
const args = process.argv.slice(2);
const command = args[0];
switch (command) {
    case 'add':
        addTask(args.slice(1).join(' '));
        break;
    case 'update':
        updateTask(parseInt(args[1], 10), args.slice(2).join(''));
        break;
    case 'delete':
        deleteTask(parseInt(args[1], 10));
        break;
    case 'mark-in-progress':
        markTask(parseInt(args[1], 10), 'in-progress');
        break;
    case 'mark-done':
        markTask(parseInt(args[1], 10), 'done');
        break;
    case 'list':
        listTasks(args[1]);
        break;
    default:
        console.error('Unknown command.');
        console.error('Available commands: add, update, delete, mark-in-progress, mark-done, list');
}
