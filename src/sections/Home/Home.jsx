import styles from "./Home.module.scss"
import Experiences from "./layout/Experiences/Experiences"
import Presentation from "./layout/Presentation/Presentation"

const Home = () => {
  return (
    <div className={styles.container}>
      <Presentation />
      <Experiences />
    </div>
  )
}

export default Home
