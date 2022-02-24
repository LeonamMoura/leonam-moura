import styles from "./CallToActionButton.module.scss"

const CallToActionButton = ({ title, handeClick }) => {
  return (
    <button onClick={handeClick} className={styles.ctaButton}>
      {title}
    </button>
  )
}

export default CallToActionButton
