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
        <div className={styles.titles}>
          <div>Lorem Ipsum is simply </div>
          <div>Go to our official Announcements</div>
        </div>
      </div>
      <div className={styles.verticalline2}></div>
      <div className={styles.ipsumdummy}>
        <div className={styles.requirement}>
          <div>Lorem Ipsum is simply dummy</div>
          <div>Go to DID requirements</div>
        </div>
        <div className={styles.simply}>
          <div>Lorem Ipsum is simply</div>
          <div>To the knowledgebase</div>
        </div>
      </div>
      <div className={styles.social}>
        <img src="/Sociallink.png" alt="sociallink" />
      </div>
    </div>
  );
};

export default Footer;