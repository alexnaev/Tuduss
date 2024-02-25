import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const [tasks, setTasks] = useState([
      {
          "id": 1,
          "text": "Legetime",
          "date": "5. Mar kl. 14:30",
          "reminder": true
      },
      {
          "id": 2,
          "text": "Møte",
          "date": "6. Mar kl. 13:30",
          "reminder": true
      },
      {
          "id": 3,
          "text": "Daglegvarehandling",
          "date": "5. Mar kl. 16:30",
          "reminder": false
      },
  ])

  // Add New Task
  const addTask = (task) => {
    // Dummy id generation
    const id = Math.floor(Math.random() * 1000) + 1
    
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header title="Tuduss"/>
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'Ingen gjeremål funne'}
    </div>
  )
}

export default App;
