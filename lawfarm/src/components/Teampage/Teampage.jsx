import React from "react";
import styles from "./Teampage.module.css";
import danielDef from "../../assets/DanielDef.png";
import sanfole from "../../assets/sanfole.png";
import Cesforila from "../../assets/sesforila.png";
import Colleen from "../../assets/colleen.png";
import Haldone from "../../assets/haldone.png";
import Nikjeo from "../../assets/Nikjeo.png";
const Teampage = () => {
  
  return (
    <div className={styles.teamHeader}>
      <h1>Our Team</h1>
      <div className={styles.teamContainer}>
        <div className={styles.teamCards}>
          <div>
            <img src={danielDef} alt="Danieldef" />
          </div>
          <div>
            <h3>Danial Def</h3>
            <p>301 Cases</p>
          </div>
        </div>
        <div className={styles.teamCards} style={{ backgroundColor: "rgba(227, 183, 72, 1)", color:"black"}} > 
          <div>
            <img src={sanfole} alt="sanfole" />
          </div>
          <div>
            <h3>Sanfole</h3>
            <p>850 Cases</p>
          </div>
        </div>
        <div className={styles.teamCards}>
          <div>
            <img src={Cesforila} alt="Cesforila" />
          </div>
          <div>
            <h3>Cesforila</h3>
            <p>470 Cases</p>
          </div>
        </div>
        <div className={styles.teamCards}>
          <div>
            <img src={Colleen} alt="Colleen" />
          </div>
          <div>
            <h3>Colleen</h3>
            <p>180 Cases</p>
          </div>
        </div>
        <div className={styles.teamCards}>
          <div>
            <img src={Haldone} alt="Haldone" />
          </div>
          <div>
            <h3>Haldone</h3>
            <p>212 Cases</p>
          </div>
        </div>
        <div className={styles.teamCards}>
          <div>
            <img src={Nikjeo} alt="Nik Jeo" />
          </div>
          <div>
            <h3>Nik Jeo</h3>
            <p>350 Cases</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teampage;
