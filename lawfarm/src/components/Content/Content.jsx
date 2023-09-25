import React from "react";
import styles from "./Content.module.css";
import boxIcon from "../../assets/box icon.png";

const Content = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subContent1}>
        <div>
          <h2>
            Let’s Introduce
            <br /> Ourself
          </h2>
        </div>
        <div className={styles.verticalLine}></div>
        <div>
          <h3>Criminal Lawyer</h3>
          <p>
            Amet minim mollit non deserunt ullamco est
            <br />
            sit aliqua dolor do amet sint. Velit officia consequatduis
            <br />
            enim velit mollit Exercitation.
          </p>
        </div>
      </div>
      <div className={styles.header}>
        <h1>Why Choose us?</h1>
        <div className={styles.subContent2}>
          <div className={styles.content1}>
            <i>
              <img src={boxIcon} alt="icon" width={62} height={62} />
            </i>
            <h4>98% Success Rate</h4>
            <p>
              Amet minim mollit non deserunt ullamco est
              <br /> sit aliqua dolor do amet sint. Velit officia
              <br /> consequatduis enim velit mollit Exer.
            </p>
            <button>Read More</button>
          </div>
          <div className={styles.content1}>
            <i>
              <img src={boxIcon} alt="icon" width={62} height={62} />
            </i>
            <h4>100% Success Rate</h4>
            <p>
              Amet minim mollit non deserunt ullamco est
              <br /> sit aliqua dolor do amet sint. Velit officia
              <br /> consequatduis enim velit mollit Exer.
            </p>
            <button>Read More</button>
          </div>
          <div className={styles.content1}>
            <i>
              <img src={boxIcon} alt="icon" width={62} height={62} />
            </i>
            <h4>100% Success Rate</h4>
            <p>
              Amet minim mollit non deserunt ullamco est
              <br /> sit aliqua dolor do amet sint. Velit officia
              <br /> consequatduis enim velit mollit Exer.
            </p>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
