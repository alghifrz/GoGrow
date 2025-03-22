import './App.css'
import Header from './components/Header'
import AddTask from './components/AddTask'
import { useState } from 'react'
import Task from './components/Task'

function App() {
  const [isShow, setIsShow] = useState(false)
  const tasks = [
    {
      id: 1,
      text: 'Task 1',
      day: 'Feb 5th at 2:30pm', 
      reminder: true
    },
    {
      id: 2,
      text: 'Task 2',
      day: 'Feb 6th at 1:30pm',
      reminder: true
    }
  ]
  return (
    <>
      <div className="container">
        <Header handleAddTask={() => setIsShow(!isShow)} />
        {isShow ? <AddTask /> : ""}

        {tasks.length > 0 ? (
          <Task tasks={tasks} />
        ) : (
          <p>No tasks to show</p>
        )}
      </div>
    </>
  )
}

export default App  
