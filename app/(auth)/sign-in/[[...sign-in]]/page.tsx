import { SignIn } from "@clerk/nextjs";
import styles from '../../../SignInPage.module.css'; // Presupunem că ai un fișier CSS separat

export default function Page() {
  return (
    <div className={styles.signInContainer}>
      <div className={styles.backgroundImage}></div>
      <SignIn />
    </div>
  );
}
