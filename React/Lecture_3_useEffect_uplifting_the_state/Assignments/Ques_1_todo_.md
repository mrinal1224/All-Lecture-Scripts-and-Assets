# create Todo application
```javascript
// rfce
import React, { useState } from 'react';
import InputBox from './inputBox';
import List from './List';

function Todo() {
    const [tasksArr, setTasks] = useState([]);
    const addTask = (inputValue) => {
        const newTask = inputValue;
        // we will never mutate  a state variable on our own 
        let newTaskArr = [...tasksArr, newTask];
        setTasks(newTaskArr);
    }
    return (
        // react Fragments
        <>
            <InputBox addTask = {addTask}></InputBox>
            <List tasksArr = {tasksArr}
                handleDelete = {handleDelete}
            ></List>
        </>
    )
}

export default Todo
```
In the inputbox.jsx we have:

```javascript
import React,{useState} from 'react'

function InputBox(props) {
    const [inputValue, setValue] = useState("");
    const handleInput = (e) => {
        setValue(e.target.value);
    }
    const addTaskChild = () => {
        props.addTask(inputValue);
        setValue("");
    }
    // we have provide acces to taskArr -> task ARR
    return (
        <div className = "inputbox">
            <input type = "text" value = {inputValue}
                onChange = {handleInput} />

            <button onClick = {addTaskChild}>Add Task</button>
        </div>
    )
}

export default InputBox;
```

In the List.jsx we have:

```javascript
import React from 'react';

function List(props) {
    const { tasksArr ,
        handleDelete
    } = props;
    return (
        <div className = "list">
            {/* list */}
            <ul>
                {tasksArr.map((task, idx) => {
                    return <li
                        onClick = {
                    () => {handleDelete(idx) }
                        }
                        key = {idx} > {task}</li>
                })}
            </ul>
        </div>
    )
}
