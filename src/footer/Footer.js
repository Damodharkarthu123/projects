import React from "react";
import styles from "./Footer.module.css";
import Footercard from "./Footercard";

const Footer = () => {
  const Keys = [
    {
      name: "Lorem",
    },
  ];
  const repeatKeys = Array(10).fill({ name: "Lorem" });
  return (
    <div className={styles.footer}>
      <div className={styles.keywords}>
        <div className={styles.heading}>Key words</div>
        <div className={styles.lorems}>
          {repeatKeys.map((item, index) => {
            return <Footercard key={`Footercard-${index}`} {...item} />;
          })}
        </div>
        <div className={styles.verticalline1}></div>
      </div>
      <div className={styles.ipsum}>
        <div className={styles.title}>
          <div>Lorem Ipsum is simply</div>
        </div>
        <button className={styles.daigram}>
          <img src="/ipsum.png" alt="ipsum" />
        </button>
        
          <div className={styles.titles}>Lorem Ipsum is simply </div>
          <div className={styles.our}>Go to our official Announcements</div>
        
      </div>
      <div className={styles.verticalline2}></div>
      <div className={styles.ipsumdummy}>
        
          <div className={styles.requirement}>Lorem Ipsum is simply dummy</div>
          <div className={styles.did}>Go to DID requirements</div>
        
        
          <div className={styles.simply}>Lorem Ipsum is simply</div>
        <div className={styles.to}>To the knowledgebase</div>
        
      </div>
      
        <img className={styles.social}src="/Sociallink.png" alt="sociallink" />
    
    </div>
  );
};

export default Footer;