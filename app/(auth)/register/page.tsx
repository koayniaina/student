import React from "react";
import styles from "@/styles/Register.module.css";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <main>
      <div className={styles.loginpage}>
        <div className={styles.register_Login}>
          <p  className={styles.text}>Register</p>
          <form action="" method="post">
            <div className={styles.input}>
              <input type="text" placeholder="Name....." />
            </div>
            <div className={styles.input}>
              <input type="email" placeholder="Email....." />
            </div>
            <div className={styles.input}>
              <input type="pasword" placeholder="Password....." />
            </div>
            <button className={styles.btn} type="submit">Register</button>
            <p className={styles.paragraphe} >
              I have acount? <Link href="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
