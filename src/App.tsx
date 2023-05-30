import styles from './App.module.css'
import { Rocket, Trash } from 'phosphor-react'

export function App() {

  return (
    <>
      <header className={styles.todoHeader}>
        <Rocket size={36} className={styles.icon}/>
        <div className={styles.title}>
          <span className={styles.firstSyllable}>to</span>
          <span className={styles.secondSyllable}>do</span>
        </div>
      </header>   
      <div className={styles.contentWrapper}>
        <form className={styles.formWrapper}>
          <input type="text" placeholder='Adicione uma nova tarefa' className={styles.inputTaskName}/>
          <button type="submit" className={styles.btnSubmitTask}>
            Criar
          </button>
        </form>
        <section className={styles.sectionWrapper}>
          <header className={styles.taskStats}>
            <div className={styles.stat}>
              <strong className={styles.created}>Tarefas criadas</strong>
              <span>5</span>
            </div>
            <div className={styles.stat}>
              <strong className={styles.completed}>Concluídas</strong>
              <span>3 de 5</span>
            </div>
          </header>
          <main className={styles.taskList}>
          <div className={styles.taskWrapper}>
            <div className={styles.taskRightSide}>
              <input type="checkbox" name="taskStatus" id="taskStatus"/>
              <p className={styles.taskDescription}>
                Estudar React Native no Ignite
              </p>
            </div>
              
              <button>
                <Trash size={18} className={styles.iconTrash}/>
              </button>
            </div>
            <div className={styles.taskWrapper}>
              <div className={styles.taskRightSide}>
                <input type="checkbox" name="taskStatus" id="taskStatus"/>
                <p className={styles.taskDescription}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Enim distinctio iste, et voluptates totam ex quia quis? 
                  Eius officiis, alias molestiae quo, facilis rerum aperiam, 
                  sequi quam repudiandae voluptatem non?
                </p>
              </div>
              
              <button>
                <Trash size={18} className={styles.iconTrash}/>
              </button>
            </div>
          </main>
        </section>
      </div>  
    </>
  )
}