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
        {id:3, title:"React", isDone: false}

    ]
    const tasks2: Array<TaskType> = [
        {id:1, title:"HTML", isDone: true},
        {id:2, title:"Books", isDone: false},
        {id:3, title:"Github", isDone: true}

    ]

    return (
        <div className="App">
            <TodoList title={"What to learn"} tasks={tasks1}/>
            <TodoList title={"What to read"} tasks={tasks2}/>
        </div>
    );
}

export default App;
