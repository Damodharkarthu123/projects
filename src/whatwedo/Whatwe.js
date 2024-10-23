import React from 'react'
import styles from './Whatwe.module.css'

import Whatwedoescard from './Whatwedoescard'

const Whatwe = () => {
  const Array=[
    {
       img:'/web.png', 
       title:'Web Application',
        description:'Platform independant business solutions for maximum availability',
        bgcolor:'#FFF2F2' 

    },
    {
       img:'/game.png',
        title:'Game Develepmet',
         description:'Interactive games with perfect graphics',
         bgcolor:'#FDFBDA' 


    },
    {
       img:'/seo.png',
        title:'SEO',
         description:'Let the world find you on top of others',
         bgcolor:'#E2F3FF' 


    },
    {
     img:'/iot.png',
      title:'Iot/ AI/ RObotic',
       description:'Advanced autonomous technologies to make life simple',
       bgcolor:'#FFE7FB' 


    },
    {
       img:'/bigdata.png',
        title:'BIG Data',
         description:'Get your decision making backed by inteligent insight',
         bgcolor:'#F6EEE7' 
 

    },
    {
     img:'/cybersecurity.png',
      title:'Cyber Security',
      description:'Make your digital assets secure and protected',
      bgcolor:'#F1F1F1' 


    },
    {
       img:'/phone.png',
       title:'Mobile Applications',
        description:'The simplest but robust technology to accompany with you',
        bgcolor:'#F1E8FF' 
 

    },
    {
       img:'/digital.png',
        title:'Digital Marketing',
         description:'Business made easy in a digital world',
         bgcolor:'#E2FFF1' 
 

    }
  ]
  return (
    <div className={styles.Whatweapplication}>
      
    
        <div className={styles.heading}>What we do</div>
    <div className={styles.Whatwedoescards}>
      {Array.map((item,index)=>{
        return <Whatwedoescard key={`Whatwedoescard-${index}`}{...item} />

      })}
    

    </div>
    <hr />
    </div>
  )
}

export default Whatwe
