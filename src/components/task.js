const Task = ({task, deletetsk, setUrgent}) => {
    return (
        <div className={task.urgent ? "tasks urgent" : "tasks"} onDoubleClick={(e) =>{setUrgent(task.id)}}>
            <div>{task.todo}</div>
            <div>{task.date}</div>
            <p style={{color:'red', cursor:"pointer"}} onClick={() =>deletetsk(task.id)}>DELETE</p>
        </div>
    )
}

export default Task
