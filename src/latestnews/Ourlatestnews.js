import React from 'react'
import styles from './Ourlatestnews.module.css'
import Ournewscard from './Ournewscard'



const Ourlatestnews = () => {

  const Array = [
    {
      img: '/holopic.png',
      date: '12/12/2020',
      title: 'Holoplot',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an'

    },
    {
      img: '/nawakpic.png',
      date: '12/12/2020',
      title: 'Nawaloka Hospitals Mobile App',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an'


    },
    {
      img: '/smartpic.png',
      date: '12/12/2020',
      title: 'Smart Solution For Ambuluwawa Biodiversity Complex',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an '
    },
    {
      img: '/hospitalpic.png',
      date:'12/12/2020',
      title: 'Nawaloka Hospitals Mobile App',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an '
    }
  ]
  return (
    <div className={styles.newssection}>
      <div className={styles.newsnext}>
      <div className={styles.header}>Our Latest News</div>
      <div className={styles.newsdescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</div></div>
      
      <div className={styles.viewallimg}> <img src='/View All.png' alt='view' /></div>
      
      <div className={styles.Ourlatestnewscards}>
        {Array.map((item, index) => {
          return <Ournewscard key={`Ournewscard-${index}`}{...item} />
        })}</div>
        

    </div>
  )
}

export default Ourlatestnews


