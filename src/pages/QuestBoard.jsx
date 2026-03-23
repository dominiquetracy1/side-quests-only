import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./QuestBoard.module.css";

const ALL_QUESTS = [
  {
    id: 1,
    title: "Deep Ellum Beats",
    desc: "Go to Deep Ellum for a late-night show.",
    category: "Nightlife",
  },
  {
    id: 2,
    title: "Bishop Secrets",
    desc: "Find the hidden speakeasy in Bishop Arts.",
    category: "Social",
  },
  {
    id: 3,
    title: "Katy Refresh",
    desc: "Walk the Katy Trail and grab a juice.",
    category: "Wellness",
  },
  {
    id: 4,
    title: "Street Art Hunt",
    desc: "Visit the Fabrication Yard for photos.",
    category: "Culture",
  },
  {
    id: 5,
    title: "The Big Eye",
    desc: "Check out the giant eyeball in Downtown.",
    category: "Sightseeing",
  },
  {
    id: 6,
    title: "Patio Sips",
    desc: "Grab a flight of margaritas in West Village.",
    category: "Food & Drink",
  },
];

const QuestBoard = () => {
  const navigate = useNavigate();

  const acceptQuest = (quest) => {
    localStorage.setItem("activeSideQuest", quest.desc);
    navigate("/"); // Auto-return to home to see the active quest
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button className={styles.backBtn} onClick={() => navigate("/")}>
          ← BACK
        </button>
        <h1 className={styles.title}>The Quest Board</h1>
        <p className={styles.subtitle}>
          Select your next Dallas adventure manually.
        </p>
      </header>

      <div className={styles.grid}>
        {ALL_QUESTS.map((quest) => (
          <div key={quest.id} className={styles.card}>
            <span className={styles.category}>{quest.category}</span>
            <h3 className={styles.cardTitle}>{quest.title}</h3>
            <p className={styles.cardDesc}>{quest.desc}</p>
            <button
              className={styles.acceptBtn}
              onClick={() => acceptQuest(quest)}
            >
              ACCEPT QUEST
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestBoard;
