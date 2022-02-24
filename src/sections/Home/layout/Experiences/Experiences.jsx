import styles from "./Experiences.module.scss"

const Experiences = () => {
  return (
    <div className={styles.container}>
      <p className={styles.sectionTitle}>EXPERIÊNCIAS</p>
      <ul className={styles.timeline}>
        <li className={styles.timelineItem}>Leonam</li>
        <li className={styles.timelineItem}>Leonam</li>
      </ul>
    </div>
  )
}

export default Experiences
