import React from "react";
import styles from "./Web.module.css";
import Webcard from "./Webcard";
import Upcomingweb from "../Upcomingweb/Upcomingweb";
import Collab from "../Collab/Collab";
import Workshop from "../Workshop/Workshop";
import Design from "../Ux-design/Design";

const Web = () => {
  const logos=[
    {name:"google",img:"/google.png"},
    {name:"microsoft",img:"/microsoft.png"},
    {name:"ibm",img:"/ibm.png"},
    {name:"apple",img:"/apple.png"},
    {name:"netflix",img:"/netflix.png"},
    {name:"tesla",img:"/tesla.png"},
  ];
  const data = [
    {
      img: "/Done.png",
      title: "How to turn your website more productive and useful?",
      description:
        "At AFQ Tech, we believe in a systematic approach for any project be it complex or simple. We are a group of individuals with a various set of skill set varies from Digita",
      color: "#d1b7f4",
    },
  ];
  const repeatdata = Array(8).fill(data[0]);
  

  return (
   
    <div className={styles.whatulearn}>
       <Design />
      <div className={styles.icons}>
        {logos.map((logo,index)=>{
         return  <img  key={index} src={logo.img} alt={logo.name}/>
        })}
      </div>
     
      <div className={styles.header}>What you will learn this Webinar? </div>
      <div className={styles.des}>
        At AFQ Tech, we believe in a systematic approach for any project be it
        complex or simple. We are a group of individuals with a various set of
        skill set varies from Digital Marketing to IoT/Robotics solutions. We
        have our dedicated team for your project which uses various methods such
        as agile Scrum & agile Kanban. We e
      </div>
      <div className={styles.mater}>
        {repeatdata.map((item, index) => {
          return <Webcard key={`web-${index} `} {...item} />;
        })}
      </div>
      <button className={styles.button}>Yes! Save My Spot</button>
      <Upcomingweb />
      <div className={styles.more}>View More</div>
      <Collab />
      <Workshop logos={logos}  repeatdata={repeatdata} />
    </div>
  );
};

export default Web;