import {createSlice} from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name: 'todoSlice',
    initialState: {
        tasks: [],
        completed: false,
        category: 'all',
        priority: 'normal'
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({
                id: Date.now(),
                text: action.payload,
                completed: false,
                category: 'all',
                priority: 'normal'
            })
        },
        toggleTask: (state, action) => {
            const task = state.find(task => task.id === action.payload)
            if(task) {
                task.completed = !task.completed
            }
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        },
        setFilter: (state, action) => {
            state.category = action.payload
        },
        updateTaskCategory: (state, action) => {
            const {id, category} = action.payload;
            const task = state.tasks.find(task => task.id === id);
            if (task) {
                task.category = category;
            }
        },
        updateTaskPriority: (state, action) => {
            const {id, priority} = action.payload;
            const task = state.tasks.find(task => task.id === id);
            if (task) {
                task.priority = priority;
            }
        }
    }
})

export const {addTask,
    toggleTask,
    deleteTask,
    setFilter,
    updateTaskCategory,
    updateTaskPriority,
} = todoSlice.actions

export default todoSlice.reducer