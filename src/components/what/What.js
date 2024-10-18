import React from 'react';
import styles from './What.module.css';

const TrainingHighlights = ({ highlights }) => {
  return (
    <div className={styles.container}>
      {highlights.map((highlight, index) => (
        <div key={index} className={styles.highlightItem}>
          <img src={highlight.image} alt="" className={styles.icon} />
          <p className={styles.text}>{highlight.text}</p>
        </div>
      ))}
      <h2 className={styles.importantNote}>והכי חשוב.. זמן איכות איתי מול המסך</h2>
    </div>
  );
};

export default TrainingHighlights;