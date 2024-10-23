

import React from 'react'
import styles from './Whatwe.module.css'

const Whatwedoescard = ({img, title, description,bgcolor}) => {
  return (
    <div className={styles.Whatwedoescard} >
      
      <div className={styles.bgcolors} style={{background:bgcolor}}>

        
        <img src={img} alt='web' className={styles.image} />
        </div>
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.description}>

        {description}
      </div>
    </div>
  )
}

export default Whatwedoescard
