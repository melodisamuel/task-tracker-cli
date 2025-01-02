import { table } from 'console';
import fs from 'fs';



// Read tasks from the json file 
export const readTasks = (): Task[] => {
    try {
        const data = fs.readFileSync('tasks.json', 'utf-8');
        return JSON.parse(data || '[]') as Task[];
    } catch (err) {
        return []
    }
}

export const writeTasks = (tasks: Task[]): void => {
    fs.writeFileSync('tasks.json', JSON.stringify(tasks, null, 2), 'utf-8' )
}