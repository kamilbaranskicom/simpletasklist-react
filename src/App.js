import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Section from './Section';
import Form from './Form';
import Tasks from './Tasks';
import TextButtons from './TextButtons';



function App() {
  let taskList = [
    { id: 1, name: 'zrobić coś', done: false },
    { id: 2, name: 'zrobić coś innego', done: true },
  ]
  
  return (
    <div className="taskList">
      <h1>Lista zadań</h1>
      <Section name='Dodaj nowe zadanie' >
        <Form />
      </Section>
      <Section name='Lista zadań' extraHeaderContents={<TextButtons taskList={taskList} />}>
        <Tasks taskList={taskList} />
      </Section>
    </div >
  );
}

export default App;
