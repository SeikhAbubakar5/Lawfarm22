import React from "react";
import heroimg from "../../assets/hero img.png";
import heroIcon from "../../assets/hero icon.png";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <p className={styles.heroText}>You don’t have to <br/><b>Fight them Alone.</b> </p>
        <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,<br/> curabitur sodales conubia ut inceptos faucibus himenaeos tortor <br/> eget, hac massa gravida arcu interdum proin curae.</p>
        <div className={styles.emailText}>
          <div className={styles.inputForms}>
            <form>
              
             <img src={heroIcon} alt="icon"/>
              <input type="text" placeholder="Enter your eamil address"/>
            </form>
          </div>
          <div className={styles.talkButton}><button>Let’s Talk</button></div>
        </div>
      </div>
  
      <div className={styles.image}>
        <img src={heroimg} alt="heroImg" />
      </div>
    </div>
  );
};

export default Hero;
