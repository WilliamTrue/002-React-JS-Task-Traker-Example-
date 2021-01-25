import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

import { useState } from 'react';

function App() {
  const [showAddTask, setShowAddTask] = useState( false )
  const [tasks, setTasks] = useState([
    {
      id: '1',
      text: 'Dinner with Wife',
      day: 'Wednesday, 25 August 2021',
      reminder: true
    },
    {
      id: '2',
      text: 'Dinner with Lover',
      day: 'Thursday, 29 April 2021',
      reminder: true
    },
    {
      id: '3',
      text: 'Take out the trash',
      day: 'Friday, 23 April 2021',
      reminder: false
    },
    {
      id: '4',
      text: 'Watch Peaky Blinders',
      day: 'Monday, 1 March 2021',
      reminder: false
    },
  ])
  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1

    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }
  // Detele Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ?
      { ...task, reminder: !task.reminder }
      : task))
  }


  return (

    <div className="container">
      <Header 
      onAdd = {() => setShowAddTask(!showAddTask)}
      showAdd = { showAddTask }
      />

      { showAddTask && <AddTask onAdd={addTask} />}

      { tasks.length > 0 ? <Tasks tasks={tasks}
        onDelete = { deleteTask } onToggle = { toggleReminder } /> : 'No task To show'
      }
    </div>
  );

}

export default App;
