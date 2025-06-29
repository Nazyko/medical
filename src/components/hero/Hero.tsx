import styles from "./Hero.module.css"
import CheckIcon from "../../assets/hero/Vector.svg"
import { Button } from "../button/Button"

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className="container">
        <div className={styles.hero_inner}>
            <h1 className={styles.hero_title}>Your source for Multiple Solutions</h1>
            <ul className={styles.hero_menu}>
                <li className={styles.hero_menu_item}>
                    <img src={CheckIcon} alt="" />
                    <p>Equipment repair and PM Service</p>
                </li>
                <li className={styles.hero_menu_item}>
                    <img src={CheckIcon} alt="" />
                    <p>Guaranteed Cost Savings vs. OEM</p>
                </li>
                <li className={styles.hero_menu_item}>
                    <img src={CheckIcon} alt="" />
                    <p>Support for "End of life" Equipment</p>
                </li>
                <li className={styles.hero_menu_item}>
                    <img src={CheckIcon} alt="" />
                    <p>Replacement Equipment Available</p>
                </li>
            </ul>
            <Button>View Products</Button>
        </div>
      </div>
    </div>
  )
}

