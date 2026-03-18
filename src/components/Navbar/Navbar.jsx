import React from "react";
import styles from "./Navbar.module.css";

const NAV_LINKS = ["LOREM IPSUM", "LOREM IPSUM", "LOREM IPSUM"];

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo} onClick={() => (window.location.href = "/")}>
        SIDE QUESTS <span className={styles.accent}>ONLY</span>
      </div>
      <div className={styles.navLinks}>
        {NAV_LINKS.map((link, index) => (
          <span key={index} className={styles.link}>
            {link}
          </span>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
