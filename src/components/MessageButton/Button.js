import React from 'react';
import styles from './Button.module.css';

const MessageButton = ({ text, message }) => {
    const handleButtonClick = () => {
        const phoneNumber = "+972527587175";
        const defaultMessage = "היי אנסטסיה ,אני רוצה לשמוע ממך עוד על..";
        const messageToSend = message || defaultMessage;
        const encodedMessage = encodeURIComponent(messageToSend);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappURL, "_blank");
    };

    return (
      <button className={styles.button} onClick={handleButtonClick}>
        <span className={styles.text}>{text}</span>
      </button>
    );
};

export default MessageButton;