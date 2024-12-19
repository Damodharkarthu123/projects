
import React from 'react'
import styles from './Collab.module.css'


const Collabcard = ({img}) => {
  return (
    <div className={styles.more} >
       <img src={img} alt='image' className={styles.images}/>
    </div>
  )
}

export default Collabcard
