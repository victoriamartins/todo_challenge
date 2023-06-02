import styles from './App.module.css'
import { Header } from './components/Header'
import { Task } from './components/Task'
import { TaskForm } from './components/TaskForm'
import { TaskStats } from './components/TaskStats'
import { useState } from "react";
import { v4 as uuid } from 'uuid'

interface TaskType {
  id: string
  isCompleted: boolean
  description: string
}

export function App() {
  const [tasks, setTasks] = useState(Array<TaskType>)
  const [totalTasks, setTotalTasks] = useState(0)
  const [completedTasks, setCompletedTasks] = useState(0)

  function handleAddNewTask(description: string): void {
    const newTask: TaskType = {
      id: uuid(),
      isCompleted: false,
      description: description
    }
    const newArrayOfTasks = [...tasks, newTask]
    setTasks(sortTasksAccordingToCompletion(newArrayOfTasks))
    setTotalTasks(totalTasks + 1)
  }
  function handleChangeOnTaskCompletion(id: string) {
    const newListOfTasks = tasks.map(task => {
      if (task.id == id) {
        task.isCompleted = !task.isCompleted
      }
      return task
    })
    setTasks(sortTasksAccordingToCompletion(newListOfTasks))
    countCompletedTasks(newListOfTasks)
  }
  function handleDeleteTask(id: string) {
    const newListWithoutDeletedOne = tasks.filter(task => task.id !== id)
    setTasks(newListWithoutDeletedOne)
    countCompletedTasks(newListWithoutDeletedOne)
    setTotalTasks(totalTasks - 1)
  }
  function countCompletedTasks(taskList: TaskType[]) {
    const completed = taskList.filter(task => task.isCompleted == true)
    setCompletedTasks(completed.length)
  }
  function sortTasksAccordingToCompletion(listOfTasks: TaskType[]): TaskType[] {
    //tutorial https://www.javascripttutorial.net/array/javascript-sort-an-array-of-objects/
    const sortedTasks = listOfTasks.sort((a, b) => {
      const stateA = a.isCompleted, stateB = b.isCompleted
      if (stateA && !stateB) return 1;
      if (stateB && !stateA) return -1;
      return 0
    })
    return sortedTasks
  }

  return (
    <>
      <Header />
      <div className={styles.contentWrapper}>
        <TaskForm onAddNewTask={handleAddNewTask} />
        
        <section className={styles.sectionWrapper}>
          <TaskStats completed={completedTasks} total={totalTasks} />
          <main className={styles.taskList}>
            {
              tasks.map(task => {
                return (
                  <Task
                    key={task.id}
                    id={task.id}
                    isCompleted={task.isCompleted}
                    description={task.description}
                    onCompletionChange={handleChangeOnTaskCompletion}
                    onDelete={handleDeleteTask}
                  />
                )
              })
            }
          </main>
        </section>
      </div>
    </>
  )
}