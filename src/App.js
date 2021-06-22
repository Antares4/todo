import Tasks from './components/tasks';
import Header from './components/header';
import Form from './components/form';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    {
        id:1,
        todo:"task1",
        date:"2020-1-12",
        urgent:false,
    },
    {
        id:2,
        todo:"task2",
        date:"2020-1-13",
        urgent:false,
    }
  ])  
  const deleteTask = (id) =>{
    setTasks(tasks.filter((task) => task.id!==id))
  }
  const createTask = (task) =>{
    
    const cid = Math.floor(Math.random()*20000) + 1 
    var newTask={id:cid, ...task, urgent:false};
    setTasks([...tasks, newTask]);
    console.log(tasks)
  }
  const setUrgent = (id) =>{
    console.log("urg", id)
    setTasks(tasks.map((task) => task.id === id ? {...task, urgent:!task.urgent} : task))
  }
  return (
    <div className="app">
      <Header />
      <Form createTask={createTask}/>
    {tasks.length > 0 ? <Tasks tasks={tasks} deleteTask={deleteTask} setUrgent={setUrgent}/> : "nothing" }
    </div>
  );
}

export default App;
