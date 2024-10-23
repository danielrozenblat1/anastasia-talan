import React from 'react';
import styles from './SixthScreen.module.css';

const SixthScreen = () => {
  const courses = [
    { id: 1, title: 'השתלמות שיווק וסושיאל פרטית מותאמת אישית' },
    { id: 2, title: 'השתלמות איפור למאפרות מתחילות' },
    { id: 3, title: 'השתלמות איפור למאפרות וותיקות' },
  ];

  const handleCourseClick = (course) => {
    const phoneNumber = "+972527587175";
    let message;
    if (course.id === 1) {
      message = "היי אנסטסיה, אשמח לשמוע ממך עוד על השתלמות סושיאל ושיווק";
    } else {
      message = `היי אנסטסיה, אני רוצה לשמוע ממך עוד על ${course.title}`;
    }
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className={styles.container}>
       <div className={styles.description}>וכמובן שהקורס הוא לא הכל! יש לך הזדמנות להפגש איתי פנים מול פנים ולקבל הרבה יותר מזה</div>
      <h1 className={styles.title}>
        קורסים פרונטלים נוספים שאני מעבירה
      </h1>
      <p className={styles.subtitle}>
        (לחצי על כל כפתור כדי לשמוע ממני עוד בנושא)
      </p>
      
      <div className={styles.buttonContainer}>
        {courses.map((course) => (
          <button
            key={course.id}
            onClick={() => handleCourseClick(course)}
            className={styles.button}
          >
            <span className={styles.text}>{course.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SixthScreen;