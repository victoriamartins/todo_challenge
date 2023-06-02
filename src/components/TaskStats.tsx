import styles from './TaskStats.module.css'

interface StatsProps {
  completed: number
  total: number
}

export function TaskStats({completed, total}:StatsProps) {
  return (
    <header className={styles.taskStats}>
      <div className={styles.stat}>
        <strong className={styles.created}>Tarefas criadas</strong>
        <span>{total}</span>
      </div>
      <div className={styles.stat}>
        <strong className={styles.completed}>Concluídas</strong>
        <span>{`${completed} de ${total}`}</span>
      </div>
    </header>
  )
}