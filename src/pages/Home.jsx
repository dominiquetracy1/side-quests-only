import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Side Quests Only</h1>
      <p className={styles.subtitle}>
        Curated Dallas adventures designed for discovery.
      </p>

      <div className={styles.buttonGroup}>
        <button className={styles.primaryButton}>VIEW MAP</button>
        <button className={styles.secondaryButton}>QUEST BOARD</button>
        <button className={`${styles.secondaryButton} ${styles.bounty}`}>
          DAILY BOUNTY
        </button>
      </div>
    </main>
  );
};

export default Home;
