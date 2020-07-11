import React from 'react';
import './addTaskForm.css';

const Form = () => {
    return (
        <form className="addTaskForm">
            <input placeholder="Co jest do zrobienia?" className="addTaskForm__newTaskName"/>
            <button className="addTaskForm__addTaskButton">
                    Dodaj zadanie
            </button>
        </form>
    );
}

export default Form;