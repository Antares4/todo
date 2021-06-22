import React from 'react'
import { useState } from 'react'
const Form = ({createTask}) => {
    const [todo, setTodo] = useState("")
    const [date, setDate] = useState("")
    const sub = (e) =>{
        e.preventDefault()
        if (todo ==="" || date ===""){
            alert("!")
        }
        else{
            createTask({todo, date})
            setTodo("")
            setDate("")
        }
    }
    return (
        <form onSubmit={sub}>
            <label htmlFor="item">Todo</label>
            <input type="text" name="item" id="item" value={todo} onChange={(e) => setTodo(e.target.value)}/>
            <label htmlFor="Duedate">Due date</label>
            <input type="date" name="Duedate" id="Duedate" value={date} onChange={(e) => setDate(e.target.value) && console.log(date)}/>
            <input type="submit" name="submit" id="submit" value="Add Task" />
        </form>
    )
}

export default Form
