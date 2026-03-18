import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Side Quests Only</h1>
      <div className={styles.buttonGroup}>
        <button className={styles.questButton}>LOREM IPSUM</button>
        <button className={styles.questButton}>LOREM IPSUM</button>
      </div>
    </main>
  );
};

export default Home;
