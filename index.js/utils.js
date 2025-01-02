"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeTasks = exports.readTasks = void 0;
const fs_1 = __importDefault(require("fs"));
// Read tasks from the json file 
const readTasks = () => {
    try {
        const data = fs_1.default.readFileSync('tasks.json', 'utf-8');
        return JSON.parse(data || '[]');
    }
    catch (err) {
        return [];
    }
};
exports.readTasks = readTasks;
const writeTasks = (tasks) => {
    fs_1.default.writeFileSync('tasks.json', JSON.stringify(tasks, null, 2), 'utf-8');
};
exports.writeTasks = writeTasks;
