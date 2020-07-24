import React from 'react';
import './tasks.css';

const Tasks = ({ taskList, hideDoneTasks, toggleDone, removeTask }) => {
    return (
        <ul className={`tasks${hideDoneTasks ? ' tasks--hideDoneTasks' : ''}`}>{
            taskList.map(({ id, name, done }) =>
                (
                    <li className={`tasks__task${(done ? ' tasks__task--done' : '')}`} key={id}>
                        <button
                            className="tasks__smallButton"
                            onClick={() => { toggleDone(id) }}
                        >
                            {(done ? '✔' : '')}
                        </button>
                        <strong className="tasks__taskName">
                            {name}
                        </strong>
                        <button
                            className="tasks__smallButton tasks__smallButton--warning"
                            onClick={() => { removeTask(id) }}
                        >
                            🗑
                        </button>
                    </li>
                )
            )
        }</ul>
    )
}

export default Tasks;