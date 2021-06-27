import React, {useState} from 'react';
import './App.css';
import {v1} from 'uuid';
import TodoList from "./TodoList";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type FilterValueType = "all" | "active" | "completed";

function App() {
    // CRUD - Create, Read, Update, Delete

    // BLL: business logic layer
    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "CSS", isDone: true},
        {id: v1(), title: "React", isDone: false},
        {id: v1(), title: "Rest API", isDone: false},
        {id: v1(), title: "GraphQL", isDone: false},

    ])
    let [filter, setFilter] = useState<FilterValueType>("all");

    function removeTask(id: string) {
        let filteredTasks = tasks.filter(t => t.id !== id);
        setTasks(filteredTasks);
    }

    let tasksForTodolist = tasks
    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => !t.isDone);
    }
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone);
    }

    function changeFilter(value: FilterValueType) {
        setFilter(value);
    }

    function addTask(taskTitle: string) {
        /*        const newTask: TaskType = {  // длинная записть создания новой таски
                    id: v1(),
                    title: taskTitle,
                    isDone: false
                }
                const updatedTasks = [newTask, ...tasks]
                setTasks(updatedTasks)*/

        setTasks([{   // короткая запись создания таски
            id: v1(),
            title: taskTitle,
            isDone: false
        }, ...tasks])
    }


    // UI: user interface
    return (
        <div className="App">
            <TodoList title={"What to learn"}
                      tasks={tasksForTodolist}
                      addTask={addTask}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
