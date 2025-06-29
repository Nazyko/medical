import styles from "./Button.module.css"

type ButtonProps = {
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    children: React.ReactNode | string;
  };

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className={styles.btn}>
      {children}
    </button>
  )
}

