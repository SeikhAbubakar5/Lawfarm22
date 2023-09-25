import React from "react";
import styles from "./Newslatter.module.css";

const Newslatter = () => {
  return (
    <div className={styles.container}>
      <h1>Subscribe Our Newsletter</h1>
      <div className={styles.formInput}>
        <div className={styles.search1}>
          <input type="text" placeholder="Name : " />
        </div>
        <div className={styles.search2}>
          <input type="text" placeholder="Enter your Email" />
        </div>

        <div className={styles.submit}>
          <button>SEND</button>
        </div>
      </div>
    </div>
  );
};

export default Newslatter;
