import CallToActionButton from "../../../../components/CallToActionButton"
import styles from "./Presentation.module.scss"
import GithubIcon from "../../../../assets/icons/github.png"
import LinkedinIcon from "../../../../assets/icons/linkedin.png"
import WhatsappIcon from "../../../../assets/icons/whatsapp.png"

const Presentation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.presentationText}>
        <span className={styles.helo}>Olá, </span>
        <span className={styles.iam}>eu sou</span>
        <p className={styles.name}>Leonam Moura</p>
        <p className={styles.office}>Desenvolvedor Front-end</p>
      </div>
      <CallToActionButton
        title="Vamos fazer algo juntos ?"
        handeClick={() => alert("gelo")}
      />
      <div className={styles.socialMediaIconsWrapper}>
        <img
          className={styles.socialMediaIcons}
          src={GithubIcon}
          alt="github"
        />
        <img
          className={styles.socialMediaIcons}
          src={LinkedinIcon}
          alt="linkedin"
        />
        <a
          href="http://github.com/leonammoura"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={styles.socialMediaIcons}
            src={WhatsappIcon}
            alt="whatsapp"
          />
        </a>
      </div>
    </div>
  )
}

export default Presentation
