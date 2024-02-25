import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

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

  return (
    <div className="container">
      <Header title="Tuduss"/>
      <Tasks tasks={tasks} />
    </div>
  )
}

export default App;
