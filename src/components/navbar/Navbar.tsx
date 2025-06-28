import styles from "./Navbar.module.css"
import Logo from "../../assets"

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.navbar_inner}>
          <div>
            <img src={Logo} alt="" />
          </div>
          <div className={styles.navbar_menu}>
            <div className={styles.navbar_item}>Jónelisler</div>
            <div className={styles.navbar_item}>Vakansiyalar</div>
            <div className={styles.navbar_item}>Sheriklerimiz</div>
            <div className={styles.navbar_item}>Registraciya</div>
            <div className={styles.navbar_item}>Qabullaw</div>
          </div>
          <button className={styles.navbar_btn}></button>
        </div>
      </div>      
    </nav>
  )
}


