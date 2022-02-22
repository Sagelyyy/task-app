import React from 'react'
import './App.css';
import Overview from './components/Overview';
import { nanoid } from 'nanoid';

function App() {

  const [taskData, setTaskData] = React.useState([    
    {
      task: {text: '', id: nanoid()},
      tasks: [],
    }
  ]
  )

  function handleChange(e){
    const {value} = e.target
    setTaskData(old => {
      return old.map(item => {return {...item, task: e.target.value}})
    })
  }

  function onSubmitTask(e){
    e.preventDefault();
    setTaskData(old => {
      return old.map(item => {return {...item, tasks: [...item.tasks, item.task]}})
    })
  };

  console.log(taskData)
  console.log(taskData.map(item => {return item.task}))
  const taskElements = taskData.map(item => {
    return(
      item.tasks.map(arr => {
        return (<Overview 
        text={arr}
        key={nanoid()}
        />)
      })
    )
  })
  return (
    <div className="App">
      <h1 className='App--title'>Task App</h1>
        <form>
          <input 
          onChange={handleChange}
          // value={} this is not working for some reason.
          id='taskInput'
          ></input>
          <button onClick={onSubmitTask}>Submit</button>
        </form>
        <div className='App--elements'>
          {taskData[0].tasks.length > 0 ? taskElements : 'Submit a new task!'}
      </div>
    </div>
  );
}

export default App;
