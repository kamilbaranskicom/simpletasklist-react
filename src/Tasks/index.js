import React from 'react';
import './tasks.css';

const Tasks = ({ taskList }) => {
    return (
        <ul className="tasks">
            {
                taskList.map(({ id, name, done }) =>
                    (
                        <li className={`tasks__task${(done ? ' tasks__task--done' : '')}`} key={id}>
                            <button className="tasks__smallButton">{(done ? '✔' : '')}</button>
                            <strong className="tasks__taskName">{name}</strong>
                            <button className="tasks__smallButton tasks__smallButton--warning">🗑</button>
                        </li>
                    )
                )
            }
        </ul>
    )
}

export default Tasks;