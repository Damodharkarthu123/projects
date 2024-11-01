

import React from 'react'
import styles from './Footer.module.css'
import Footercard from './Footercard'


const Footer = () => {
    const  Keys = [
        {
        name:'Lorem'
        }
    ]
    const repeatKeys= Array(10).fill(Keys[0])
  return (
    <div className={styles.footer}>
        <div className={styles.keywords}>
        <div className={styles.heading}>Key words</div>
        <div className={styles.lorems}>
            { repeatKeys.map((item,index)=>{
                return <Footercard  key={`Footercard-${index}`}{...item}/>
            })}
        </div>
        </div>
        <div className={styles.ipsum}>
        <div className={styles.title}>Lorem Ipsum is simply</div>
        <div className={styles.daigram}>
            <img src='/ipsum.png' alt='ipsum' />

        </div>
        <div className={styles.titles}>Lorem Ipsum is simply
        <div className={styles.description}>Go to our official Announcements</div>
        </div>
        <div className={styles.ipsumdummy}>Lorem Ipsum is simply dummy</div>
        <div className={styles.matter}>Go to DID requirements</div>
        <div className={styles.simply}>Lorem Ipsum is simply</div>
        <div className={styles.base}>To the knowledgebase</div>
        <div className={styles.social}>
            <img src='/Sociallink.png' alt='sociallink' />
            </div>
            </div>
     </div>
  )
}

export default Footer
