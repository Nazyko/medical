import styles from "./Navbar.module.css"
import Logo from "../../assets/navbar/logo.png"
import { HashLink } from "react-router-hash-link" 
import { Link } from "react-router-dom"
import { Button } from "../button/Button"


export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className="container">
        <div className={styles.nav_inner}>
          <Link to="/" className={styles.nav_logo}>
            <img src={Logo} alt="" width={85}/>
            <p>Nókis Medicina Hám IT Texnikumı</p>
          </Link>
          <ul className={styles.nav_menu}>
            <li className={styles.nav_menu_item}>
              <HashLink to="" className={styles.nav_item}>Jónelisler</HashLink>
            </li>
            <li className={styles.nav_menu_item}>
              <HashLink to="" className={styles.nav_item}>Vakansiyalar</HashLink>
            </li>
            <li className={styles.nav_menu_item}>
              <HashLink to="" className={styles.nav_item}>Sheriklerimiz</HashLink>
            </li>
            <li className={styles.nav_menu_item}>
              <HashLink to="" className={styles.nav_item}>Qabıllaw</HashLink>
            </li>
            <Button>
              <HashLink to="" className={styles.nav_btn}>Registraciyadan ótiw</HashLink>
            </Button>
          </ul>
        </div>
      </div>      
    </nav>
  )
}


