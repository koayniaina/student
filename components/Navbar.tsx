import React from "react";
import styles from "@/styles/Navbars.module.css";
import { FaSchool } from "react-icons/fa";
import { DialogDemo } from "./shadcn/Dialog";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <FaSchool className={styles.icon} />
        <span className={styles.span}>Student</span>
      </div>
      <div className={styles.btn}>
        <DialogDemo />
      </div>
    </header>
  );
}
