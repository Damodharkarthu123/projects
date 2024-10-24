

import React from 'react'
import styles from './Webinar.module.css'

const Webinar = () => {
  return (
    <div className={styles.webinarregister}>
        <div className={styles.heading}>Webinars</div>
        <div className={styles.webinarnext}>
        <div className={styles.image}>
        <img src='/jhon.png' alt="Webinar" /> </div>
        <div className={styles.webinarnextnext}>
         <div className={styles.name}>Mr.john smith</div> 
         <div className={styles.ceo}>CEO at X-design</div>
         <div className={styles.title}>How to become a UX Designer</div>
         <div className={styles.description}>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod vitae lorem mattis ut at at lobortis Lorem  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod vitae lorem mattis ut at at lobortis Lorem  Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>  
         <div className={styles.date}>20th Nov</div>   
         <div className={styles.time}>10.00 AM IST</div>
         <button className={styles.registerButton}>
          Register 
        </button>
        </div>
        </div>
    </div>
  )
}

export default Webinar
