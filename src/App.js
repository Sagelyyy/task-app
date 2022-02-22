import React from 'react'
import './App.css';
import Overview from './components/Overview';
import { nanoid } from 'nanoid';

function App() {

  const [task, setTask] = React.useState(
    {
      task: {text: ''},
      tasks: []
    }
  )

  return (
    <div className="App">
        <input></input>
        <button>Submit</button>
        <Overview />
    </div>
  );
}

export default App;
