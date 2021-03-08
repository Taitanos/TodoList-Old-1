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

    let [filter, setFilter] = useState<"all" | "active" | "completed"> ("all");

    let tasksForTodolist = tasks;

    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => t.isDone === false);
    }
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone === true);
    }

    function changeFilter(value: "all" | "active" | "completed") {
        setFilter(value);
    }

    return (
        <div className="App">
            <TodoList title={"What to learn"}
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
