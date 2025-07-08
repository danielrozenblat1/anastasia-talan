import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import ring from "../../Icons/wired-outline-724-diamond-luxury-precious-loop-cycle.json";
import styles from './FirstScreen.module.css';
import PinkScrollButton from '../../components/button/Button';
import makeup from "../../Icons/wired-outline-1599-powder-makeup-face-hover-pinch (2).json"
import middleImage from "../../images/אנסטסיה תלן תדמית.png";
import rightImage from "../../images/אנסטסיה טלן איפור 1.png"
import leftImage from "../../images/אנסטסיה תמונה שמאל.png"
import GradientLoader from '../../components/loader/Loader';
const FirstScreen = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imageUrls = [
      middleImage,
      rightImage,
      leftImage
    ];

    const loadImage = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = url;
      });
    };

    Promise.all(imageUrls.map(loadImage))
      .then(() => setImagesLoaded(true))
      .catch((err) => console.error("Failed to load images", err));
  }, []);

  if (!imagesLoaded) {
    return <GradientLoader/>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={`${styles.backgroundImage} ${styles.leftImage}`}></div>
        <div className={`${styles.backgroundImage} ${styles.centerImage}`}></div>
        <div className={`${styles.backgroundImage} ${styles.rightImage}`}></div>
      </div>
      
      <div className={styles.contentBox}>
        <h1 className={styles.title}>ANASTASIA TALAN HAKIM</h1>
  
        {/* <div className={styles.buttonContainer}>
        <PinkScrollButton text="אני עומדת להתחתןןןן" icon={ring} to="כלה"/>
        <PinkScrollButton text="לקורסים הדיגיטלים, השתלמויות ומאסטרקלאסים" icon={makeup} to="מאפרת"/>
  
        </div> */}
      </div>
    </div>
  );
};

export default FirstScreen;