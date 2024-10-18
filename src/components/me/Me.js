import React from 'react';
import styles from './Me.module.css';
import anastasia from "../../images/אנסטסיה טלן.png"
import anastasiaBrides from "../../videos/אנסטסיה טלן אווירה כלות.mp4"
import anastasiaTeach from "../../videos/אנסטסיה טלן הדרכות.mp4"
import Recommends from '../recommends/Recommends';
const AboutMe = () => {
  return <>
      <div className={styles.header} id="מי אני">בואי נכיר</div>
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={anastasia} alt="אנסטסיה טלן חכים" className={styles.image} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>אנסטסיה טלן חכים</h1>

        <p className={styles.description}>
8 שנים שאני מאפרת כלות ומכניסה אותן לחופה ביום הכי חשוב בחיים שלהן עם אנרגיות,חיוך ואיפור שלא משאיר מקום לספק! <br/> ב-5 שנים האחרונות אני מרצה בבית הספר של איל מקיאז' ומעבירה השתלמויות למאפרות תותחיות ששואפות תמיד להשתפר ולהתחק בתחום. <br/> מי שעוקבת כבר יודעת שאני נשואה למיסטר חכים שתומך, עוזר ומכיל אותי נונ סטופ <br/> ומי שבמקרה לא עוקבת אני מחכה להסברים...
        </p>


      </div>
 
    </div>
    <div className={styles.subtitle}>תמיד דואגת להשאיר את הכלות שלי עם חיוך ואת המאפרות שעוברות דרכי מפוצצות בידע</div>
<div className={styles.row}>
      <div className={styles.videoWrapper}>
          <video 
            className={styles.video} 
            src={anastasiaBrides} 
            alt="אנסטסיה טלן אווירה כלות" 
            autoPlay 
            loop 
            muted 
            playsInline 
            controls
          />
     
        </div>
        <div className={styles.videoWrapper}>
          <video 
            className={styles.video} 
            src={anastasiaTeach} 
            alt="אנסטסיה טלן קורס דיגיטלי" 
            autoPlay 
            loop 
            muted 
            playsInline 
            controls
          />
     
        </div>
     
    
        </div>

    </>
};

export default AboutMe;