import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {FilterValueType, TaskType} from "./App";

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    addTask: (taskTitle: string) => void
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValueType) => void
}

function TodoList(props: TodoListPropsType) {
    const [title, setTitle] = useState<string>("")

    const all = () => props.changeFilter("all")
    const active = () => props.changeFilter("active")
    const completed = () => props.changeFilter("completed")

    const addTask = () => {
        props.addTask(title)
        setTitle("")
    }

    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressAddTask = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") addTask()
    }

    const tasks = props.tasks.map(t => {
        const removeTask = () => {
            props.removeTask(t.id)
        }
        return (
            <li key={t.id}>
                <input type={"checkbox"} checked={t.isDone}/>
                <span>{t.title}</span>
                <button onClick={removeTask}> X</button>
            </li>
        )
    })

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input
                    value={title}
                    onChange={changeTitle}
                    onKeyPress={onKeyPressAddTask}
                />
                <button onClick={addTask}>+
                </button>
            </div>
            <ul>
                {tasks}
            </ul>
            <div>
                <button onClick={all}>All
                </button>
                <button onClick={active}>Active
                </button>
                <button onClick={completed}>Completed
                </button>
            </div>
        </div>
    )
}

export default TodoList;