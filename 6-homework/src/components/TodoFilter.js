import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setFilter} from "../store/todoSlice";


const TodoFilter = () => {

    const filter = useSelector(state => state.todoReducer.category)
    const dispatch = useDispatch()
    const tasks = useSelector(state => state.todoReducer.tasks)

    return (
        <div className="task-filter">
            <button
            className={filter === 'all' ? 'all' : ''}
            onClick={() => dispatch(setFilter('all'))}
            >
            все
            </button>
            <button
            className={filter === 'all' ? 'work' : ''}
            onClick={() => dispatch(setFilter('work'))}
            >
            работа
            </button>
            <button
            className={filter === 'all' ? 'life' : ''}
            onClick={() => dispatch(setFilter('life'))}
            >
            личные
            </button>
            <button
            className={filter === 'all' ? 'study' : ""}
            onClick={() => dispatch(setFilter('study'))}
            >
            учеба
            </button>
        </div>
    )
}

export default TodoFilter;