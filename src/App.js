import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Section from './Section';
import Form from './Form';
import Tasks from './Tasks';
import TextButtons from './TextButtons';

function App() {
    const [hideDoneTasks, setHideDoneTasks] = useState(false);
    const [taskList, setTaskList] = useState([
        // { id: 1, name: 'do something', done: false },
        // { id: 2, name: 'do something else', done: true },
    ]);

    const addTask = (name) => {
        setTaskList([
            ...taskList,
            {
                id: getFirstUnusedId(taskList),
                name,
                done: false,
            }
        ])
    }
    const getFirstUnusedId = (arrayOfObjects) => {
        for (let number = 0; number < arrayOfObjects.length + 1; number++) {
            if (!arrayOfObjects.some(({ id }) => id === number)) { return number }
        }
        return arrayOfObjects.length;
    }
    const removeTask = (id) => {
        setTaskList(taskList.filter((task) => task.id !== id))
    }
    const toggleDone = (id) => {
        setTaskList(taskList.map((task) => {
            if (task.id === id) {
                return { ...task, done: !task.done };
            }
            return task;
        }));
    }
    const setAllDone = () => {
        setTaskList(taskList.map((task) => ({ ...task, done: true })));
    }
    const toggleHideDoneTasks = () => {
        setHideDoneTasks(!hideDoneTasks);
    }

    return (
        <div className="taskList">
            <h1>Lista zadań</h1>
            <Section name='Dodaj nowe zadanie'>
                <Form addTask={addTask} />
            </Section>
            <Section
                name='Lista zadań'
                extraHeaderContents={
                    <TextButtons
                        taskList={taskList}
                        hideDoneTasks={hideDoneTasks}
                        toggleHideDoneTasks={toggleHideDoneTasks}
                        setAllDone={setAllDone}
                    />
                }
            >
                <Tasks
                    taskList={taskList}
                    hideDoneTasks={hideDoneTasks}
                    toggleDone={toggleDone}
                    removeTask={removeTask}
                />
            </Section>
        </div>
    );
}

export default App;
