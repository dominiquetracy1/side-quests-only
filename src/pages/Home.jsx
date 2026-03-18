import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";

const BOUNTIES = [
  "Go to Deep Ellum for a late-night show.",
  "Find the hidden speakeasy in Bishop Arts.",
  "Walk the Katy Trail and grab a juice.",
  "Visit the Fabrication Yard for some street art photos.",
  "Check out the giant eyeball in Downtown.",
  "Grab a flight of margaritas at a patio in West Village.",
  "Watch the sunset from the top of Reunion Tower.",
  "Explore the used book stacks at Wild Detectives.",
  "Picnic at Klyde Warren Park over the freeway.",
  "Take a ride on the vintage M-Line Trolley.",
  "Hunt for vintage finds at the Design District galleries.",
  "Walk through the bamboo forest at the Dallas Arboretum.",
  "Get a corny dog and see the Texas Star at Fair Park.",
  "Do a self-guided architecture tour of the Arts District.",
  "Find the best street tacos in Oak Cliff.",
];

const Home = () => {
  const [currentBounty, setCurrentBounty] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [streak, setStreak] = useState(0);
  const [hoverText, setHoverText] = useState("Side Quests Only");
  const [activeOverlay, setActiveOverlay] = useState(null);

  useEffect(() => {
    const savedQuest = localStorage.getItem("activeSideQuest");
    const savedStreak = localStorage.getItem("questStreak");

    if (savedQuest) setCurrentBounty(savedQuest);
    if (savedStreak) setStreak(parseInt(savedStreak));
  }, []);

  const getRank = (count) => {
    if (count >= 15) return "Dallas Legend";
    if (count >= 10) return "Local Guide";
    if (count >= 5) return "Urban Explorer";
    return "Newcomer";
  };

  const rollBounty = () => {
    setIsSearching(true);
    setCurrentBounty("");
    setActiveOverlay(null);

    setTimeout(() => {
      const randomQuest = BOUNTIES[Math.floor(Math.random() * BOUNTIES.length)];
      setCurrentBounty(randomQuest);
      localStorage.setItem("activeSideQuest", randomQuest);
      setIsSearching(false);
    }, 1500);
  };

  const completeQuest = () => {
    const newStreak = streak + 1;
    setStreak(newStreak);
    localStorage.setItem("questStreak", newStreak);
    setCurrentBounty("");
    localStorage.removeItem("activeSideQuest");
  };

  const abandonQuest = () => {
    setCurrentBounty("");
    localStorage.removeItem("activeSideQuest");
  };

  return (
    <main className={styles.container}>
      <div className={styles.streakBadge}>
        <span className={styles.rankText}>{getRank(streak)}</span>
        <div className={styles.streakCount}>🏆 {streak} Quests</div>
      </div>

      <h1 className={styles.title}>{hoverText}</h1>
      <p className={styles.subtitle}>
        Curated Dallas adventures for your next great story.
      </p>

      {(isSearching || currentBounty || activeOverlay) && (
        <div className={styles.displayArea}>
          {isSearching && (
            <div className={styles.loader}>SEARCHING QUEST BOARD...</div>
          )}

          {currentBounty && !isSearching && (
            <div className={styles.bountyPopup}>
              <button className={styles.closeBtn} onClick={abandonQuest}>
                ✕
              </button>
              <div className={styles.bountyContent}>
                <span>ACTIVE QUEST:</span> {currentBounty}
              </div>
              <div className={styles.popupButtons}>
                <button className={styles.completeBtn} onClick={completeQuest}>
                  QUEST COMPLETED
                </button>
                <button className={styles.rerollBtn} onClick={rollBounty}>
                  TRY ANOTHER
                </button>
              </div>
            </div>
          )}

          {activeOverlay && !isSearching && !currentBounty && (
            <div className={styles.infoPopup}>
              <button
                className={styles.closeBtn}
                onClick={() => setActiveOverlay(null)}
              >
                ✕
              </button>
              <h3>{activeOverlay}</h3>
              <p>
                This feature is currently under development. Check back after
                your next quest!
              </p>
            </div>
          )}
        </div>
      )}

      <div className={styles.buttonGroup}>
        <button
          className={styles.primaryButton}
          onClick={() => setActiveOverlay("Interactive Map")}
          onMouseEnter={() => setHoverText("Navigate Dallas")}
          onMouseLeave={() => setHoverText("Side Quests Only")}
        >
          VIEW MAP
        </button>
        <button
          className={styles.secondaryButton}
          onClick={() => setActiveOverlay("Quest Board")}
          onMouseEnter={() => setHoverText("Pick a Mission")}
          onMouseLeave={() => setHoverText("Side Quests Only")}
        >
          QUEST BOARD
        </button>
        {!currentBounty && (
          <button
            className={`${styles.secondaryButton} ${styles.bounty}`}
            onClick={rollBounty}
            onMouseEnter={() => setHoverText("Roll the Dice")}
            onMouseLeave={() => setHoverText("Side Quests Only")}
            disabled={isSearching}
          >
            {isSearching ? "ROLLING..." : "DAILY BOUNTY"}
          </button>
        )}
      </div>
    </main>
  );
};

export default Home;
