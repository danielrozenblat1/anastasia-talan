import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  ExternalLink,
  Users, 
  BookOpen, 
  Camera, 
  Star, 
  DollarSign, 
  MessageCircle, 
  ShoppingCart, 
  Briefcase, 
  Heart, 
  Instagram, 
  TrendingUp, 
  Clock, 
  Target,
  Sparkles,
  Award,
  Eye,
  Palette,
  Crown,
  Zap,
  Brush
} from 'lucide-react';
import styles from './SecondScreen.module.css';
import course from "../../images/קורס דיגיטלי אנסטסיה.png"
// ייבוא התמונה לקורס החדש - החליפי את הנתיב לתמונה האמיתית
import missToMrsCourse from "../../images/אנסטסיה קורס 2.png"

const MakeupCourse = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMissToMrsDrawerOpen, setIsMissToMrsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleMissToMrsDrawer = () => {
    setIsMissToMrsDrawerOpen(!isMissToMrsDrawerOpen);
  };

  const courseDetails = [
    {
      title: "תמחור",
      icon: <DollarSign className={styles.detailIcon} />,
      description: "איך לתמחר שירותים באופן מקצועי, הבנת עלויות, רווחיות וקביעת מחירים תחרותיים בשוק"
    },
    {
      title: "בטחון מול לקוחה",
      icon: <Heart className={styles.detailIcon} />,
      description: "בניית ביטחון עצמי, טכניקות תקשורת, התמודדות עם לקוחות מתקשות וניהול מצבים לא נעימים"
    },
    {
      title: "קנייה חכמה למזוודה חכמה",
      icon: <ShoppingCart className={styles.detailIcon} />,
      description: "רכישות חכמות של בעלת עסק, רשימה מפורטת של ציוד בסיסי, בחירה חכמה של מוצרים, כיצד לשמור על סדר ונקיון בשוטף"
    },

    {
      title: "צילום ותאורה",
      icon: <Camera className={styles.detailIcon} />,
      description: "עקרונות צילום מקצועי, סוגי תאורה, זוויות צילום וטכניקות לתמונות מושלמות"
    },
    {
      title: "עמדת צילום מקצועית בבית",
      icon: <Eye className={styles.detailIcon} />,
      description: "הקמת אזור צילום בבית, בחירת רקע, סידור תאורה וציוד במרחב מוגבל"
    },
    {
      title: "זוויות צילום ועריכה",
      icon: <Palette className={styles.detailIcon} />,
      description: "זוויות צילום מחמיאות, העמדה נכונה מול מצלמה, עריכת תמונות סטילס ברמה מקצועית"
    },

    {
      title: "שיחת מכירה",
      icon: <MessageCircle className={styles.detailIcon} />,
      description: "טכניקות מכירה, איך לנהל שיחה עם לקוחה פוטנציאלית, התמודדות עם התנגדויות"
    },
    {
      title: "מעקב לידיים",
      icon: <Target className={styles.detailIcon} />,
      description: "מערכת מעקב אחר לקוחות פוטנציאליים, כלים דיגיטליים ליצירת קשר מתמשך"
    },
    {
      title: "מיתוג",
      icon: <Sparkles className={styles.detailIcon} />,
      description: "בניית זהות מותג, היכרות מעמיקה עם אופי העסק שלך"
    },
    {
      title: "אינסטגרם עסקי",
      icon: <Instagram className={styles.detailIcon} />,
      description: "הקמת פרופיל עסקי, אסטרטגיות תוכן, השימוש בסטוריז, רילס והגדלת הפולו"
    },
    {
      title: "שיווק",
      icon: <TrendingUp className={styles.detailIcon} />,
      description: "אסטרטגיות שיווק דיגיטלי, פרסום ברשתות חברתיות, שיתופי פעולה עם עסקים"
    },
    {
      title: "ייעול זמנים",
      icon: <Clock className={styles.detailIcon} />,
      description: "ניהול יומן עבודה, חלוקת זמן יעילה מול לקוחות, חלוקת זמן יעילה בצילום תוכן"
    },
    {
      title: "שתפים ועוד",
      icon: <Zap className={styles.detailIcon} />,
      description: "שיתופי פעולה עם צלמים, מעצבי שיער, אירועים ועוד דרכים להרחיב את העסק"
    }
  ];

  const targetAudience = [
    "מאפרות שסיימו קורס איפור",
    "מאפרות עם יומן אוורירי מעבודה", 
    "מאפרות שמתקשות בשיווק",
    "מאפרות שלא יודעות איך להתנהל עסקית",
    "מאפרות בלי בטחון מול לקוחות",
    "מאפרות שרוצות לעבוד בבלעדיות בתחום",
    "מאפרות ללא ידע בצילום ועריכה"
  ];

  const handlePurchase = () => {
    window.open('https://meshulam.co.il/s/b1365b30-3a93-e6a4-1fb9-ec2458d06d35', '_blank');
  };

  const handleMissToMrsDetails = () => {
    // החליפי לקישור האמיתי לפרטים על הקורס
    window.open('https://misstomrs.ravpage.co.il/misstomrs', '_blank');
  };



  return (
    <div className={styles.makeupCourseContainer}>
      {/* הקורס הראשון - Makeup a Business */}
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img 
            src={course}
            alt="Makeup Business Course"
            className={styles.image}
          />
        </div>

        <div className={styles.header}>

          <p className={styles.subtitle}>ממאפרת לבעלת עסק</p>
        </div>

        <div className={styles.description}>
          <h2 className={styles.sectionTitle}>למי הקורס מתאים?</h2>
          <div className={styles.audienceList}>
            {targetAudience.map((item, index) => (
              <div key={index} className={styles.audienceItem}>
                <div className={styles.bulletPoint}></div>
                <span className={styles.audienceText}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <button 
            className={styles.detailsButton}
            onClick={toggleDrawer}
          >
            <span>לעוד פרטים על הקורס</span>
            {isDrawerOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          
          <button 
            className={styles.purchaseButton}
            onClick={handlePurchase}
          >
            <span>לרכישת הקורס</span>
            <ExternalLink size={20} />
          </button>
        </div>

        <div className={`${styles.drawer} ${isDrawerOpen ? styles.drawerOpen : ''}`}>
          <div className={styles.drawerContent}>
            <h2 className={styles.drawerTitle}>מה מחכה לך בקורס?</h2>
            <div className={styles.detailsGrid}>
              {courseDetails.map((detail, index) => (
                <div key={index} className={styles.detailItem}>
                  <div className={styles.detailHeader}>
                    {detail.icon}
                    <h3 className={styles.detailTitle}>{detail.title}</h3>
                  </div>
                  <p className={styles.detailDescription}>{detail.description}</p>
                </div>
              ))}
            </div>
            
            <div className={styles.drawerFooter}>
              <button 
                className={styles.drawerPurchaseButton}
                onClick={handlePurchase}
              >
                <span>התחילי את המסע שלך עכשיו</span>
                <ExternalLink size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* הקורס השני - Miss to Mrs */}
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img 
            src={missToMrsCourse}
            alt="Miss to Mrs Course"
            className={styles.image}
          />
        </div>

        <div className={styles.header}>
          <h1 className={styles.mainTitle}>Miss to Mrs</h1>
          <p className={styles.subtitle}>הכנה מנטלית ופרקטית לכלות</p>
        </div>

        <div className={styles.description}>
          <p className={styles.courseDescription}>
            קורס מיוחד המיועד לכלות לעתיד המעוניינות להתכונן נכון לחתונה ולחיי הנישואין. 
            הקורס כולל הכנה מנטלית, ייעוץ לתכנון החתונה, טיפים לניהול לחץ וכלים לבניית יחסים זוגיים חזקים.
            כל זאת במטרה להפוך את המעבר מרווקות לנשואות לחוויה מהנה ומשמעותית.
          </p>
        </div>

        <div className={styles.buttonContainer}>
          <button 
            className={styles.detailsButton}
            onClick={handleMissToMrsDetails}
          >
            <span>עוד פרטים על הקורס</span>
            <ExternalLink size={20} />
          </button>
          
      
        </div>
      </div>
    </div>
  );
};

export default MakeupCourse;