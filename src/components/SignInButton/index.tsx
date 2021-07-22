import {FaGithub} from "react-icons/fa";
import {FiX} from "react-icons/fi";

import styles from "./styles.module.scss";

export function SignInButton() {

  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button className={styles.signInButton} type="button" onClick={() => {}}><FaGithub color="#04d361" />Marcos Henrique <FiX color="#73738e" className={styles.CloseIcon}/></button>
  ) : (
    <button className={styles.signInButton} type="button" onClick={() => {}}><FaGithub color="#3ba417" />Sign in with Github</button>
  )

}