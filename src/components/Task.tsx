import { Circle, CheckCircle, Trash } from 'phosphor-react'
import { useState } from 'react'
import styles from './Task.module.css'

interface TaskProps {
  id: string
  isCompleted: boolean
  description: string
  onCompletionChange: (id:string) => void
  onDelete: (id:string) => void
}

export function Task({id, isCompleted, description, onCompletionChange, onDelete}:TaskProps) {
  const [completedState, setCompletedState] = useState(isCompleted)

  function handleCompletionChange(){
    isCompleted = !isCompleted
    const newState = !completedState
    setCompletedState(newState)
    onCompletionChange(id)
  }

  function handleDeleteTask() {
    onDelete(id)
  }

  return (
    <div className={styles.taskWrapper}>
      <div className={styles.taskRightSide}>
        <button className={styles.btnCheck} onClick={handleCompletionChange}>
          {
            completedState ? 
              <CheckCircle 
                size={18} 
                weight='fill' 
                className={styles.iconChecked}
              /> 
              :
              <Circle 
                size={18} 
                className={styles.iconCheck} 
              />
          }
        </button>

        <p className={completedState ? styles.taskDescriptionStrikes : styles.taskDescription}>
          {description}
        </p>
      </div>

      <button className={styles.btnTrash} onClick={handleDeleteTask}>
        <Trash size={18} className={styles.iconTrash}/>
      </button>
    </div>
  )
}