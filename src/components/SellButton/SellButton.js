import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import styles from './SellButton.module.css';

const PinkScrollButton = ({ text, icon, to, onNavbarOpen }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      ScrollReveal().reveal(buttonRef.current, {
        duration: 1000,
        distance: '20px',
        origin: 'bottom',
        rotate: {
          x: 0,
          y: 15,
          z: 0
        },
        opacity: 0,
        scale: 0.8,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
      });
    }
  }, []);

  const handleClick = () => {
    // אם יש onNavbarOpen - פתיחת הNavbar בלבד
    if (onNavbarOpen) {
      onNavbarOpen();
    } else if (to) {
      // אחרת - scroll link רגיל - רק אם האלמנט קיים
      const element = document.getElementById(to);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.warn(`Element with id "${to}" not found`);
      }
    }
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className={styles.pinkButton}
    >
      {icon && <span className={styles.buttonIcon}>{icon}</span>}
      {text}
    </button>
  );
};

export default PinkScrollButton;