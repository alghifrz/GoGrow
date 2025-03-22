import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import AddTask from './components/AddTask'
import { useState, useEffect } from 'react'
import Tasks from './components/Tasks'

function App() {
  const [isShow, setIsShow] = useState(false)
  const [tasks, setTasks] = useState([])
  const API_URL = 'http://192.168.1.5:3000'

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        console.log('Fetching tasks...')
        const res = await fetch(`${API_URL}/tasks`)
        const data = await res.json()
        console.log('Fetched tasks:', data)
        return data
      } catch (error) {
        console.error('Error fetching tasks:', error)
        return []
      }
    }

    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      console.log('Setting tasks:', tasksFromServer)
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  const deleteTask = async (id) => {
    await fetch(`${API_URL}/tasks/${id}`, {
      method: 'DELETE'
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`${API_URL}/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    })

    const data = await res.json()
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task))
  }

  const fetchTask = async (id) => {
    const res = await fetch(`${API_URL}/tasks/${id}`)
    const data = await res.json()
    return data
  }

  const addTask = async (task) => {
    const res = await fetch(`${API_URL}/tasks`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()
    setTasks([...tasks, data])
  }

  return (
    <Router>
      <div className="container">
        <Header 
          handleAddTask={() => setIsShow(!isShow)} 
          showAddTask={isShow} 
        />  
        <Routes>
          <Route path="/" element={
            <>
              {isShow ? <AddTask onAdd={addTask} /> : ""}
              {tasks.length > 0 ? (
                <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
              ) : (
                <p>No tasks to show</p>
              )}
            </>
          } />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App  
