import React,{useState,useEffect} from "react";
import { fetchTask,createTask } from "../api";

const TaskList = () => {
const[tasks,setTasks] = useState([]);
const[newTask,setNewTask] = useState({title:'',description:''});

useEffect(()=>{
    const getTasks = async()=>{
        const tasks = await fetchTask();
        setTasks(tasks);
    };
    getTasks();
},[]);

const handleChange = (e)=>{
    const {name,value} = e.target;
    setNewTask({...newTask,[name]:value});
}
const handleAddTask = async(e)=>{
    e.preventDefault();
    try{
        await createTask(newTask);
        setNewTask({title:'',description:''});
        const tasks = await fetchTask();
        setTasks(tasks);
    }
    catch{
        alert("failed to add task")
    }
}
const handleDelete = async()=>{
    
}


  return (
    <div>
      <h2>___Tasks___</h2>
      <form onSubmit={handleAddTask}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={newTask.title}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={newTask.description} onChange={handleChange}></textarea>
        </div>
        <button type="submit">add task</button>
      </form>
      <ul>
        {tasks.map(task=>{
            <li key={task.id}>
                <h4>{task.title}</h4>
                <p>{task.description}</p>
                <button onClick={()=>handleDelete(task.id)} >Delete</button>
            </li>
        })}
      </ul>
    </div>
  );
}

export default TaskList