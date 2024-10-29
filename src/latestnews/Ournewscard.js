

import React from 'react'
import styles from './Ourlatestnews.module.css'

const Ournewscard = ({img,date, title, description}) => {
  return (
    <div className={styles.Ournewscard} >
    
    <div className={styles.imagees} >
    <img src={img} alt='pics' className={styles.image} />
    <div className={styles.date}>{date}</div>
   
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

export default Ournewscard
