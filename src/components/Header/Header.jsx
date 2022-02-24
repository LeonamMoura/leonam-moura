import styles from "./Header.module.scss"

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <div>
          <span className={styles.tag}>{"<"}</span>
          <span className={styles.name}>Leonam Moura </span>
          <span className={styles.tag}>{"/>"}</span>
        </div>

        <span className={styles.office}>Desenvolvedor Front-end</span>
      </div>
      <ul className={styles.menuList}>
        <li className={styles.menuItem}>INCÍCIO</li>
        <li className={styles.menuItem}>SERVIÇOS</li>
        <li className={styles.menuItem}>HABILIDADES</li>
        <li className={styles.menuItem}>CONTATO</li>
      </ul>
    </div>
  )
}

export default Header
