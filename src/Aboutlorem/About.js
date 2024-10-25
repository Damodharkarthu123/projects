import React from 'react'
import styles from './About.module.css'
import Aboutuscard from './Aboutuscard'

const About = () => {
  const Array = [
    {
      img: '/VR Array 1.png',
      title: ' Cutting Edge Technology',
      description: 'Take the advantage of our cutting-edge solutions to increase your Return of Investment on IT.'


    },
    {
      img: '/lines.png',
      title: 'Cross Device Compatibility',
      description: 'Multi-device compatibility ensures that creating, viewing and providing quick and easy',
      bgcolor:'F1F1F1'
      
    

    },
    {
      img: '/clock .png',
      title: 'Tailer Mode Development',
      description: 'Scalable and dynamic systems with the ever-changing trends to meet your dynamic business needs',
      bgcolor:'F1F1F1'
    }

  ]
  return (
    <div className={styles.aboutuswrapper}>

      <div className={styles.heading}>About <span className={styles.color}>Lorem</span></div>

      <div className={styles.aboutusdescription}>  At AFQ Tech, we believe in a systematic approach for any project be it complex or simple. We are a group of individuals with a various set of skill set varies from Digital Marketing to IoT/Robotics solutions. We have our dedicated team for your project which uses various methods such as agile Scrum & agile Kanban. We ensure top-notch quality, on-time delivery, and agility for your project.
      </div >
      <div className={styles.Aboutuscards}>
        {Array.map((item,index)=>{
       return <Aboutuscard  key= {`Aboutuscard-${index}`}{...item} />

        })}
        
      </div> 
      <hr  />

    </div>
    
    
    
  )
}

export default About
