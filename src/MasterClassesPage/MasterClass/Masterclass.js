import React, { useState } from 'react';
import styles from './Masterclass.module.css';
import { ChevronDown, ChevronUp, Eye, Palette, Users, Sparkles, Heart, Star, Zap, Target } from 'lucide-react';
import masterclass1 from "../../images/אנסטסיה מאסטרקלאסים 1.png" 
import masterclass2 from "../../images/אנסטסיה מאסטרקלאסים 2.png"
const icons = [Palette, Users, Sparkles, Heart, Star, Zap, Target, Eye];

const MasterclassCard = ({ image, title, content, masterclassUrl }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getIcon = (index) => {
    const IconComponent = icons[index % icons.length];
    return <IconComponent className={styles.contentIcon} />;
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
      </div>

      <div className={styles.cardContent}>
        <h2 className={styles.title}>{title}</h2>

        <button
          className={styles.toggleButton}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          לפתיחת תוכן העניינים
          {isExpanded ? (
            <ChevronUp className={styles.chevron} />
          ) : (
            <ChevronDown className={styles.chevron} />
          )}
        </button>

        <div className={`${styles.contentContainer} ${isExpanded ? styles.expanded : ''}`}>
          <div className={styles.contentList}>
            {content.map((item, index) => (
              <div key={index} className={styles.contentItem}>
                {getIcon(index)}
                <span className={styles.contentText}>{item}</span>
              </div>
            ))}
          </div>

          <div className={styles.watchButtonContainer}>
            <a
              href={masterclassUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.watchButton}
            >
              <Eye className={styles.watchIcon} />
              לצפייה במאסטרקלאס
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};


const MasterclassSection = () => {
  const masterclassData = [
    {
      image: masterclass1,
      title: "BRIDAL SOFT GLAM",
      content: [
        "פירוט מלא של כל המוצרים שאני משתמשת בהם כולל גוונים ומספרים",
        "טיפים לאיפור כלה עמיד גם בימים החמים של הקיץ",
        "טכניקה מיוחדת לבסיס זוהר ושזוף",
        "איפור עיניים כלתי וטרנדי",
        "טכניקה מיוחדת לאיילנר קלאסי והדבקת ריסים",
        "טכניקה לאיפור גבות טבעי ועדכני",
        "קומבו שפתיים כלתי מבוקש",
        "טכניקה מיוחדת לנמשים טבעיים"
      ],
      masterclassUrl: "https://meshulam.co.il/s/da74ccbc-7a73-aaaa-a759-5888a5f5fbec"
    },
    {
      image: masterclass2,
      title: "DARK SKIN FULL GLAM",
      content: [
        "פירוט מלא של כל המוצרים שאני משתמשת בהם כולל גוונים ומספרים",
        "טכניקה מיוחדת להתמודדות עם עור מאוד שומני וטקסטורה לא אחידה",
        "טכניקה לאיפור כהות עור והתאמה נכונה של גוונים",
        "טיפים לאיפור עמיד לעור מאתגר",
        "טכניקת ה - Cut Crease",
        "טכניקה מיוחדת לאיילנר והדבקת ריסים",
        "טכניקה מיוחדת לשרטוט גבות מאפס",
        "הקומבו שפתיים המפורסם שלי"
      ],
      masterclassUrl: "https://meshulam.co.il/s/3a06329e-7185-a398-1a8c-f8a7468b0a4d"
    }
  ];

  return (
    <div className={styles.section}>
      {masterclassData.map((masterclass, index) => (
        <MasterclassCard
          key={`masterclass-${index}`}
          cardId={`masterclass-${index}`}
          {...masterclass}
        />
      ))}
    </div>
  );
};

export default MasterclassCard;
export { MasterclassSection };