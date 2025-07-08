import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import styles from './NavBarNew.module.css';
import logo from "../../images/אנסטסיה טלן לוגו.png"

import { FaInstagram, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';

const NavBarNew = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = () => {
    const phoneNumber = "+972527587175";
    const message = "היי אנסטסיה ,אני רוצה לשמוע ממך עוד על..";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsClosing(false);
      }, 500);
    } else {
      setIsMenuOpen(true);
    }
  };

  const menuItems = [
    { name: 'עמוד הכלות', path: '/' },
    { name: 'לכל הקורסים הדיגיטלים', path: '/Courses' },
    { name: 'לעמוד ההשתלמויות', path: '/hishtalmut' },
    { name: 'לכל המאסטר קלאסים', path: '/masterclass' }
  ];

  return (
    <nav className={styles.navbar}>
      {windowWidth <= 850 && (
        <div className={styles.hamburger} onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      )}
      {windowWidth <= 850 && (
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>
      )}
      {(isMenuOpen || isClosing) && windowWidth <= 850 && (
        <div className={`${styles.mobileMenu} ${isClosing ? styles.closing : ''}`}>
          <div className={styles.mobileMenuContent}>
            {menuItems.map((item, index) => (
              <NavLink 
                key={index} 
                to={item.path}
                onClick={toggleMenu}
                className={({ isActive }) => 
                  `${styles.mobileMenuItem} ${isActive ? styles.active : ''}`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <div className={styles.center}>
              <img className={styles.image} src={logo} alt="אנסטסיה טלן לוגו"/>
            </div>
          </div>
        </div>
      )}
      {windowWidth > 850 && (
        <div className={styles.menuItems}>
          {menuItems.map((item, index) => (
            <NavLink 
              key={index} 
              to={item.path}
              className={({ isActive }) => 
                isActive ? styles.active : ''
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
      {windowWidth > 1050 && (
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>
      )}
      <div className={styles.socialIcons}>
        <a href="https://www.instagram.com/anastasia.talan.makeup/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a onClick={handleClick}><FaWhatsapp /></a>
      </div>
    </nav>
  );
};

export default NavBarNew;