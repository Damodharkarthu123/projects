import React from 'react'
import styles from './Web.module.css'

const Web = () => {
    const icons=[
        {image:"/google.png"},
        {image:"/microsoft.png"},
        {image:"/apple.png"},
        {image:"/ibm.png"},
        {image:"/netflix.png"},
        {image:"/tesla.png"},

    ]
  return (
    <div className={styles.wrapper}>
      <div>
        {icons.map((item,index)=>{
        return <div key={index}>
            <img src={item.image} alt="images"  className={styles.images}/>
            </div>
})}
      </div>
      <div>
        <p>What you will learn this Webinar?</p>
        <h5>At AFQ Tech, we believe in a systematic approach for any project be it complex or simple. We are a group of individuals with a various set of skill set varies from Digital Marketing to IoT/Robotics solutions. We have our dedicated team for your project which uses various methods such as agile Scrum & agile Kanban. We e</h5>
      </div>
    </div>
  )
}

export default Web
