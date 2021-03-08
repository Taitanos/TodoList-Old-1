import React from 'react';
import './App.css';
import TodoList from "./TodoList";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

function App() {
    const tasks1: Array<TaskType> = [
        {id:1, title:"JS", isDone: true},
        {id:2, title:"CSS", isDone: true},
        {id:3, title:"React", isDone: false},
        {id:4, title:"Rest API", isDone: false},
        {id:5, title:"GraphQL", isDone: false}

    ]

    return (
        <div className="App">
            <TodoList title={"What to learn"} tasks={tasks1}/>
        </div>
    );
}

export default App;
