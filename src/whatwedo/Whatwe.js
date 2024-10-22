import React from 'react'
import styles from './Whatwe.module.css'

import Whatwedoescard from './Whatwedoescard'

const Whatwe = () => {
  return (
    <div className={styles.Whatweapplication}>
        <div className={styles.heading}>What we do</div>
    <div>
      <Whatwedoescard />
    </div>
    </div>
  )
}

export default Whatwe
