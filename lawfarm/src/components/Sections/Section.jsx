import React from 'react';
import Hero from "../Hero/Hero";
import styles from "./Section.module.css";
import Content from '../Content/Content';
import Cardsimage from "../CardsImages/Cardsimage";
import Cards from "../Cards/Cards";
import Teampage from '../Teampage/Teampage';
import Faq from '../Faq/Faq';
import Newslatter from '../Newslatter/Newslatter';
const Section = () => {
  return (
    <div className={styles.sectionHeader}>
        <Hero/>
        <Content/>
        <Cardsimage/>
        <Cards/>
        <Teampage/>
        <Faq/>
        <Newslatter/>
    </div>
  );
}

export default Section;
