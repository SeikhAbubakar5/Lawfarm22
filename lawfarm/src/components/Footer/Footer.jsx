import React from 'react';
import styles from "./Footer.module.css";
import footerLogo from "../../assets/logo.png";
import instaIcon from "../../assets/Instaicon.svg";
import facebookIcon from "../../assets/Facebookicon.svg";
import twitterIcon from "../../assets/Twittericon.svg";
import pintrestIcon from "../../assets/Pintresticon.svg";

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.footerContainer} >
            <div className={styles.logo}>
                <img src={footerLogo} alt='Logo'/>
            </div>
            <div className={styles.menuItems}>
                <ul>
                   <a href='Navbar'> <li style={{ fontSize: '16px', fontWeight: '400', lineHeight: '24px' }}>Home </li></a>
                    <li style={{ fontSize: '16px', fontWeight: '600', lineHeight: '26px' }}>Attorneys</li>
                    <li style={{ fontSize: '16px', fontWeight: '700', lineHeight: '24px' }}>Practice Areas </li>
                    <li style={{ fontSize: '16px', fontWeight: '600', lineHeight: '26px' }}>About Us</li>
                </ul>
            </div>
            <div className={styles.icons}>
                <img src={instaIcon} alt='instaicon'/>
                <img src={facebookIcon} alt='facebookicon'/>
                <img src={twitterIcon} alt='tweetericon'/>
                <img src={pintrestIcon} alt='pintresticon'/>
            </div>
        </div>
        <div className={styles.discription}>
                <ul>
                    <li>© 2020 Acme. All right reserved.</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                </ul>
        </div>
    </div>
  );
}

export default Footer;
