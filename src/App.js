import React from 'react'
import './App.css';
import Overview from './components/Overview';
import { nanoid } from 'nanoid';

function App() {

  const [task, setTask] = React.useState([    
    {
      currTask: {text: ''},
      tasks: [],
      id: nanoid()
    }
  ]
  )

  function handleChange(e){
    const {value} = e.target
    setTask(old => {
      return old.map(item => {return {...item, currTask: value}})
    })
  }

  function onSubmitTask(e){
    e.preventDefault();
    setTask(old => {
      return old.map(item => {return {...item, tasks: [...item.tasks, item.currTask]}})
    })
  };

  console.log(task)
  const taskElements = task.map(item => {
    return(
      <Overview 
        text={item.tasks}
        key={item.id}
        />
    )
  })
  return (
    <div className="App">
        <form>
          <input 
          onChange={handleChange}
          value={task.text}
          id='taskInput'
          ></input>
          <button onClick={onSubmitTask}>Submit</button>
        </form>
      {task[0].tasks.length > 0 ? taskElements : 'Submit a new task!'}
    </div>
  );
}

export default App;
