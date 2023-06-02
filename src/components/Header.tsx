import { Rocket } from "phosphor-react";
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.todoHeader}>
      <Rocket size={36} className={styles.iconRocket} />
      <div className={styles.title}>
        <span className={styles.firstSyllable}>to</span>
        <span className={styles.secondSyllable}>do</span>
      </div>
    </header>
  )
}