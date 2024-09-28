import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteTask, toggleTask, updateTaskCategory, updateTaskPriority} from "../store/todoSlice";




const TodoList = () => {

    const tasks = useSelector(state => {
        const {tasks, category} = state.todoReducer;
        if (category === 'all') {
            return tasks.filter(task => task.category === 'all');
        }
        return tasks.filter(task => task.category === category);
    });


    const dispatch = useDispatch();

    const handleCategoryChange = (id, category) => {
        dispatch(updateTaskCategory({id, category}));
    };

    const handlePriorityChange = (id, priority) => {
        dispatch(updateTaskPriority({id, priority}));
    };

    return (
        <div>
            <ul className="task-list">
                {tasks.map((task) => (
                    <li key={task.id}
                        className={task.completed ? 'completed' : ''}
                    >
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => dispatch(toggleTask(task.id))}
                        />

                        <span
                            onClick={() => dispatch(toggleTask(task.id))}
                            style={{color: task.priority === 'high' ? 'red' : 'black'}}
                        >
                            {task.text}
                        </span>

                        <button onClick={() => dispatch(deleteTask(task.id))}>удалить</button>

                        {task.category === 'all' && (
                            <div className='category-buttons'>
                                <button onClick={() => handleCategoryChange(task.id, 'work')}>Работа</button>
                                <button onClick={() => handleCategoryChange(task.id, 'life')}>Личное</button>
                                <button onClick={() => handleCategoryChange(task.id, 'study')}>Учеба</button>
                            </div>
                        )}
                        {task.category !== 'all' && (
                            <button onClick={() => handlePriorityChange(task.id, 'high')}>
                                Приоритет
                            </button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;