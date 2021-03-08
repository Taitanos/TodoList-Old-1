import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

function App() {
    let [tasks, setTasks] = useState( [
        {id:1, title:"JS", isDone: true},
        {id:2, title:"CSS", isDone: true},
        {id:3, title:"React", isDone: false},
        {id:4, title:"Rest API", isDone: false},
        {id:5, title:"GraphQL", isDone: false}

    ])

    function removeTask(id:number) {
        let filteredTasks = tasks.filter(t => t.id !== id);
        setTasks(filteredTasks);

    }

    return (
        <div className="App">
            <TodoList title={"What to learn"}
                      tasks={tasks}
                      removeTask={removeTask}/>
        </div>
    );
}

export default App;
