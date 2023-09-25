import React from "react";
import styles from "./Cardsimage.module.css";
import img1 from "../../assets/businesslaw1.svg";
import img4 from "../../assets/businesslaw2.svg";
import img5 from "../../assets/landlawdisputes.svg";
import img3 from "../../assets/realstatelaw.svg";
import img2 from "../../assets/partnershiplaw.svg";
import img6 from "../../assets/elderabuse.svg";
const Cardsimage = () => {
  return (
    <div className={styles.flexContainer}>
        <h1>Area of Practices</h1>
      <div className={styles.container}>
        <div className={styles.cardsImg}>
          <img src={img1} alt="img1" />
          <p>BUSINESS LAW</p>
        </div>
        <div className={styles.cardsImg}>
          <img src={img2} alt="img2" />
          <p>Partnership LAW</p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.cardsImg}>
          <img src={img3} alt="img3" />
          <p>REAL ESTATE LAW</p>
        </div>
        <div className={styles.cardsImg}>
          <img src={img4} alt="img4" />
          <p>BUSINESS LAW</p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.cardsImg}>
          <img src={img5} alt="img5" />
          <p>LANDLORD DISPUTES</p>
        </div>
        <div className={styles.cardsImg}>
          <img src={img6} alt="img6" />
          <p>ELDER ABUSE</p>
        </div>
      </div>
    </div>
  );
};

export default Cardsimage;
