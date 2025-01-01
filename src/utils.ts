import fs from 'fs';

// Read tasks from the json file 
export const readTasks = (): Task[] => {
    try {
        const data = fs.readFileSync('tasks.json', 'utf-8');
        return JSON.parse(data || )
    }
}