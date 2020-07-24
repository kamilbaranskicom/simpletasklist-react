import React from 'react';
import './textButtons.css';

const TextButtons = ({ taskList, hideDoneTasks, toggleHideDoneTasks, setAllDone }) => {
    return taskList.length > 0 && (
        <div className="textButtons">
            <button
                className="textButtons__textButton"
                onClick={toggleHideDoneTasks}
            >
                {hideDoneTasks ? 'Pokaż' : 'Ukryj'} ukończone
            </button>
            <button
                className="textButtons__textButton"
                disabled={taskList.every(taskList => taskList.done)}
                onClick={setAllDone}
            >
                Ukończ wszystkie
            </button>
        </div>
    )
}

export default TextButtons;