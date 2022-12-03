import React from 'react'
import './styles/App.scss'
import { useState, ChangeEvent } from 'react'
import useLocalStorage from './hooks/useLocalStorage'
import { TASK, DEADLINE } from './utils/constants'
import Header from './components/Header'
import TodoNew from './components/TodoNew'
import TodoList from './components/TodoList'
import { ITask } from './types/Interfaces'


function App() {
  const [task, setTask] = useState<string>('')
  const [deadline, setDeadline] = useState<Date>(new Date())
  const [todoList, setTodo] = useLocalStorage('todoList', [])

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === TASK) {
      setTask(event.target.value)
    }
    if (event.target.name === DEADLINE) {
      setDeadline(new Date(event.target.value))
    }
  }

  const addTask = (): void => {
    const newTask = {
      task: task,
      deadline: deadline,
    }

    if (task.length !== 0) {
      setTodo([...todoList, newTask])
      setTask('')
      setDeadline(new Date())
    }
  }

  const deleteTask = (keyValue: number): void => {
    setTodo(
      todoList.filter((task: ITask, index: number) => {
        return index !== keyValue;
      }),
    )
  }

  return (
    <div className="App">
      <Header />
      <main className="main">
        <TodoNew
          task={task}
          deadline={deadline}
          setDeadline={setDeadline}
          handleChange={handleChange}
          addTask={addTask}
        />
        <TodoList
        todoList={todoList}
        deleteTask={deleteTask} />
      </main>
    </div>
  )
}

export default App
