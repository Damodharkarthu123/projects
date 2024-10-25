import React from 'react'
import styles from './About.module.css'

const Aboutuscard = ({img, title, description,bgcolor}) => {
  return (
    <div className={styles.Aboutuscard} >
      <div className={styles.bgcolors} style={{background:bgcolor}}></div>
      <div className={styles.imagees} >
      <img src={img} alt='VRArray' className={styles.image} />
     
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.description}>

        {description}
      </div>
      </div>

    </div>
  )
}

export default Aboutuscard
