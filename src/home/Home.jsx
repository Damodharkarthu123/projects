import React from 'react'
import { Route, Routes,route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./Home.css";
import Firstpage from './Firstpage';
import Secondpage from './Secondpage';
import Thirdpage from './Thirdpage';
import Fourthpage from './Fourthpage';
import Fifthpage from './Fifthpage';

const Home = () => {
  return (
    <div className='dh'>
        <div className='dha'>
            <div className='head'>LOGO</div>
        <div className='navsection'>
           <Link><li>Home</li></Link> 
            
           <Link><li>About us</li></Link>  
          
          <Link><li>Services</li></Link> 
           <Link><li>News</li></Link> 
           <Link><li>Contactus</li></Link> 
        </div>
        <img src='/Rectangle 119.png' alt='sd' className='su' />
        <img src='/Rectangle 1.png' alt='gsd' className='sa' />
        </div><hr />
         <Routes>
      <Route path='abcd' element = {<Firstpage />} />
      <Route path='abcde' element = {<Secondpage />} />
      <Route path='abcdef' element = {<Thirdpage />} />
      <Route path=',abcdefg' element ={<Fourthpage />} />
      <Route path=',abcdefgh' element ={<Fifthpage />} />

      </Routes>
     <Firstpage />
      <Secondpage />
      <Thirdpage />
      <Fourthpage />
      <Fifthpage />
    </div>
  )
}

export default Home