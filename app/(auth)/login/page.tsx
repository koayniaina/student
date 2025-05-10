import React from "react";
import styles from "@/styles/Login.module.css";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main>
      <div className={styles.loginpage}>
        <div className={styles.register_Login}>
          <p  className={styles.text}>Login</p>
          <form action="" method="post">
            <div className={styles.input}>
              <input type="email" placeholder="Email....." />
            </div>
            <div className={styles.input}>
              <input type="pasword" placeholder="Password....." />
            </div>
            <button className={styles.btn} type="submit">Login</button>
            <p className={styles.paragraphe} >
              I don't have acount? <Link href="/register">Register</Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
