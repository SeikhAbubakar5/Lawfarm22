import React from "react";
import styles from "./Cards.module.css";
import leftArrow from "../../assets/leftArrow.svg";
import rightArrow from "../../assets/rightArrow.svg";
import janeCooper from "../../assets/jane-cooper.png";
import devonLane from "../../assets/devon-lane.png";
import robertFox from "../../assets/robert-fox.png";
const Cards = () => {
  return (
    <div>
      <div className={styles.header}>
        <h1>
          What says our <br />
          happy Clients
        </h1>
        <button>
          <img src={leftArrow} alt="leftArrow" />
        </button>
        <button style={{ backgroundColor: "rgba(227, 183, 72, 1)" }}>
          {" "}
          <img src={rightArrow} alt="rightArrow" />
        </button>
      </div>
      <div className={styles.cardsContent}>
        <div className={styles.cards}>
          <img src={janeCooper} alt="janecooper" />
          <h4>Jane Cooper</h4>
          <h5>Ceo of Hunt</h5>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua
            dolor do amet sint. Velit officia
          </p>
        </div>
        <div className={styles.cards}>
          <img src={devonLane} alt="devonlane" />
          <h4>Devon Lane</h4>
          <h5>Ceo of Hunt</h5>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua
            dolor do amet sint. Velit officia
          </p>
        </div>
        <div className={styles.cards}>
          <img src={robertFox} alt="robertFox" />
          <h4>Robert Fox</h4>
          <h5>Ceo of Hunt</h5>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua
            dolor do amet sint. Velit officia
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
