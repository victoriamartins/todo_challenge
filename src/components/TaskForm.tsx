import { PlusCircle } from "phosphor-react";
import styles from './TaskForm.module.css'
import { useState, ChangeEvent, FormEvent } from "react";

interface TaskFormProps {
  onAddNewTask: (description:string) => void
}

export function TaskForm({onAddNewTask}:TaskFormProps) {
  const [description, setDescription] = useState('')

  function handleDescriptionChange(event:ChangeEvent<HTMLInputElement>) {
    const text = event.target.value
    setDescription(text)
  }
  function handleNewTask(event:FormEvent) {
    event?.preventDefault()
    onAddNewTask(description)
    setDescription('')
  }

  return (
    <form className={styles.formWrapper} onSubmit={handleNewTask}>
      <input 
        type="text" 
        placeholder="Adicione uma nova tarefa" 
        className={styles.inputTaskName} 
        value={description}
        onChange={handleDescriptionChange}
        required
      />
      <button type="submit" className={styles.btnSubmitTask}>
        Criar
        <PlusCircle size={16} weight="bold" />
      </button>
    </form>
  )
}