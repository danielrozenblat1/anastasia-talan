import React, { useEffect } from 'react';
import styles from './Sillabus.module.css';
import { BookOpen, Briefcase, Palette, Instagram, Users, Camera, Video, List } from 'lucide-react';
import SellButton from '../SellButton/SellButton';
import ScrollReveal from "scrollreveal";

const syllabusData = [
  { icon: BookOpen, title: 'שיעור 1', description: 'איך בונים מיינדסט חזק ובריא להצלחה בכל תחום' },
  { icon: Briefcase, title: 'שיעור 2', description: 'מדריך להתנהלות עסקית נכונה בעסק ומול כלות בפרט' },
  { icon: Palette, title: 'שיעור 3', description: 'איך למתג את העסק ולבדל את עצמך ממאפרים אחרים' },
  { icon: Instagram, title: 'שיעור 4', description: 'הבנה עמוקה של האלגוריתם וקהל היעד שלך באינסטגרם' },
  { icon: Users, title: 'שיעור 5', description: 'בנייה של פרופיל חזק ומושך שיכניס לך עוקבים ולידים באופן קבוע' },
  { icon: Camera, title: 'שיעור 6', description: 'איך לבנות סטורי חזק שתמיד תהי ראשונה אצל העוקבות שלך' },
  { icon: Video, title: 'שיעור 7', description: 'כל הסודות לרילס ופוסט ויראלי שמביא לידים אמיתיים בלי ממומן' },
  { icon: List, title: 'שיעור 8', description: 'רשימת תכנים למאפרות שגורמים לרילסים שלי להתפוצץ כל פעם מחדש' },
];

const Sillabus = () => {
    useEffect(() => {
        ScrollReveal().reveal(`.${styles.step}`, {
          duration: 1000,
          distance: "100px",
          origin: "left",
          easing: "ease-out",
          reset: false,
          viewFactor: 0.2,
          interval: 300,
          delay: 200,
          scale: 1,
        });
    }, []);

    return (
        <>
            <div className={styles.subtitle}>הקורס הוא דיגיטלי והוא מורכב מ-8 שיעורים</div>
            <div className={styles.explain}>השיעורים קצרים,יעילים והכי חשוב - מדוייקים (כי אין על ישר ולעניין)</div>
            <div className={styles.header}>וזה הולך ככה..</div>
            <div className={styles.container}>
                <div className={styles.sillabus}>
                    {syllabusData.map((item, index) => (
                        <div key={index} className={styles.step}>
                            <div className={styles.iconWrapper}>
                                <item.icon className={styles.icon} size={24} strokeWidth={1.5} />
                            </div>
                            <h3 className={styles.title}>{item.title}</h3>
                            <p className={styles.description}>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <SellButton text="אנסטסיה, אני רוצה לרכוש את הקורס!" url="https://meshulam.co.il/purchase?b=f1a9a803b2a4a7cc8357c97ff1a913f6"/>
        </>
    );
};

export default Sillabus;