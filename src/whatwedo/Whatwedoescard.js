

import React from 'react'
import styles from './Whatwe.module.css'

const Whatwedoescard = ({img, title, description}) => {
  return (
    <div className={styles.Whatwedoescard}>
        
        <img src={img} alt='VRArray' className={styles.image} />
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
