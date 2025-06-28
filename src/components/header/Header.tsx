import Phone from "../../assets/header/phone.svg"
import Email from "../../assets/header/email.svg"
import "./Header.Module.css"
import styles from "./Header.module.css"

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.header_inner}>
            <div className={styles.header_phone}>
                <div className={styles.header_icon}>
                    <img src={Phone} alt="" />
                </div>
                <span className={styles.header_text}>Tel: 888.688.6822</span>
            </div>
            <div className={styles.header_email}>
                <div className={styles.header_icon}>
                    <img src={Email} alt="" />
                </div>
                <span className={styles.header_text}>contact@siellamedical.com</span>
            </div>
        </div>
      </div>
    </div>
  )
}

