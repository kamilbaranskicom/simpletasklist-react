import React, { useState } from 'react';
import './addTaskForm.css';

const Form = ({ addTask }) => {
    const [newTaskName, setNewTaskName] = useState('');

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskName.trim()) {
            addTask(newTaskName.trim());
            setNewTaskName('');
        };
        // gonna learn better way of input focus
        document.querySelector('.addTaskForm__newTaskName').focus();
    }

    return (
        <form className="addTaskForm" onSubmit={onFormSubmit}>
            <input
                placeholder="Co jest do zrobienia?"
                className="addTaskForm__newTaskName"
                value={newTaskName}
                onChange={event => setNewTaskName(event.target.value)}
            />
            <button className="addTaskForm__addTaskButton">
                Dodaj zadanie
            </button>
        </form>
    );
}

export default Form;