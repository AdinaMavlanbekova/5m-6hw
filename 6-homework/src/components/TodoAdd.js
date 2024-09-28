import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addTask} from "../store/todoSlice";


const TodoAdd = () => {

    const [task, setTask] = useState('')
    const dispatch = useDispatch()

    const addTaskText = () => {
        if (task.trim()) {
            dispatch(addTask(task))
        }
    }

    return (
        <div className="add-task">
            <input
                type="text"
                placeholder={'Введите задачу'}
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={addTaskText}>Добавить</button>
        </div>
    )
}

export default TodoAdd;