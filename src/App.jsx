import { useState } from 'react'

import './App.css'

function App() {

  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState("")

  const todotask = (event) =>{
    setNewTask(event.target.value)
  }

  const addButton = () =>{
    if(newTask.trim() !== ""){setTasks([...tasks, newTask]);
      setNewTask("")}
    

  }

 const deleteTask = (index) =>{
    const updatetasks = tasks.filter((_, i) => i!==index);
    setTasks(updatetasks);
  }

  return (
      <><div className="container">
          <div className='todo'> 
          <h1>To-Do List</h1>

          <input type="text"
          placeholder='Enter your task'
          value={newTask}
          onChange={todotask}/>

          <button
          onClick={addButton}
          className='add-Button'
          >Add Task</button>

       </div>
       
        <ol>
          {tasks.map((task, index) => 
            <li key={index}>
              <span>{task}</span>
              <button
              className='delete-Button'
              onClick={() => deleteTask(index)}>Delete</button>
            </li>
          )}
        </ol>
      </div>
       
      </> 
  )
}

export default App
