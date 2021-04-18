import React from "react";
import {FilterValueType, TaskType} from "./App";

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    addTask: (taskTitle: string) => void
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValueType) => void
}

function TodoList(props: TodoListPropsType) {

    const tasks = props.tasks.map(t => {
        const removeTask = () => { props.removeTask(t.id) }
        return (
            <li key={t.id}>
                <input type={"checkbox"} checked={t.isDone}/>
                <span>{t.title}</span>
                <button onClick={removeTask}> X </button>
            </li>
        )
    })

    const all = () => props.changeFilter("all")


    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button onClick={() => {
                    props.addTask("New task")
                }}>+
                </button>
            </div>
            <ul>
                {tasks}
            </ul>
            <div>
                <button onClick={all}>All
                </button>
                <button onClick={() => {
                    props.changeFilter("active")
                }}>Active
                </button>
                <button onClick={() => {
                    props.changeFilter("completed")
                }}>Completed
                </button>
            </div>
        </div>
    )
}

export default TodoList;


{/* <ul>
                {props.tasks.map(t => <li key={t.id}>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    <button onClick={() => {
                        props.removeTask(t.id)
                    }}> x
                    </button>
                </li>)
                }
            </ul>

        */
}
