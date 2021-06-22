import Task from "./task"

const Tasks = ({tasks, deleteTask, setUrgent}) => {
    return ( 
        <div className="task">
            {tasks.map((task) => (<Task key={task.id} task={task} deletetsk={deleteTask} setUrgent={setUrgent}/>))}
        </div>
    )
}
export default Tasks

