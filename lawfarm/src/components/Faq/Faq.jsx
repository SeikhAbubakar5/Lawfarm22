import React from "react";
import styles from "./Faq.module.css";
const Faq = () => {
  return (
    <div className={styles.faqContainer}>
      <div className={styles.aqItem}>
        <h1>FAQ</h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit <br />
          aliqua dolor do amet sint.
        </p>
      </div>
      <div className={styles.faqAccordion}>
        <h2>Do I need a personal injury report?</h2>
        <p>
          Amet minim mollit non deserunt ullamco est sit
          <br />
          aliqua dolor do amet sint. Velit officia consequatduis
          <br />
          enim velit mollit Exer. Amet minim mollit non deserunt
          <br />
          ullamco est sit aliqua dolor do amet sint. Velit officia
          <br /> consequatduis enim velit mollit Exer.
        </p>
        <div className={styles.accordion}>
          <h3>How much is my case worth?</h3>
          <button>+</button>
        </div>
        <div className={styles.accordion}>
          <h3>What should I do right after car accidect</h3>
          <button>+</button>
        </div>
        <div className={styles.accordion}>
          <h3>How much is my case worth?</h3>
          <button>+</button>
        </div>
      </div>
    </div>
  );
};

export default Faq;
