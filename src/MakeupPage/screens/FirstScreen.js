import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Palette, Camera, Users, Clock, Award, Image, Video, Smartphone, Edit, Target, Instagram, Star, Heart, Sparkles, Brush, Eye, Droplets, CheckCircle, Play, Settings, TrendingUp, MessageCircle, Gift, MessageSquare, Lightbulb, GraduationCap, Zap, Crown, Search, Phone, DollarSign, FileText, MapPin, Calendar, Shield } from 'lucide-react';
import styles from './FirstScreen.module.css';
import hishtalmut1 from "../../images/השתלמות סושיאל אנסטסיה.png"
import hishtalmut2 from "../../images/השתלמות וידאו אנסטסיה.png"
import hishtalmut3 from "../../images/אנסטסיה השתלמויות 3.png"
import hishtalmut4 from "../../images/אנסטסיה השתלמויות 4.png" // תמונה חדשה לסילבוס כלות

const hishtalmutData = [
  {
    id: 1,
    title: "השתלמות איפור פרטית",
    description: "שדרגי את כישורי האיפור שלך במפגש מעשי עם מאפרת מקצועית",
    image: hishtalmut4,
    sections: [
      {
        title: "מה נלמד?",
        items: [
          { icon: <Target className="w-5 h-5" />, text: "הדגמה שלי על חצי פנים והשלמה שלך לחצי השני" },
          { icon: <Users className="w-5 h-5" />, text: "הכרת הדוגמנית: להבין את צרכיה ואת הסגנון שלה" },
          { icon: <Star className="w-5 h-5" />, text: "סקירת הסגנון המבוקש: לבחון השראות ולהחליט על המראה הסופי" },
          { icon: <Droplets className="w-5 h-5" />, text: "הכנת עור: איזון סוג העור וטכניקות לאיפור עמיד" },
          { icon: <Sparkles className="w-5 h-5" />, text: "שימוש במוצרים: עבודה עם מוצרים איכותיים והמלצות" },
          { icon: <Eye className="w-5 h-5" />, text: "הדגמת טכניקה: טכניקה מתקדמת לאיפור עיניים, בסיס, קווי תיחום ושפתיים" }
        ]
      },
      {
        title: "מה תקבלי?",
        items: [
          { icon: <Clock className="w-5 h-5" />, text: "מפגש אחד של 4 שעות" },
          { icon: <Award className="w-5 h-5" />, text: "תעודת השתתפות" },
      
          { icon: <Camera className="w-5 h-5" />, text: "צילום מקצועי בכל תנאי אפשרי" }
        ]
      },
      {
        title: "בונוסים",
        items: [
          { icon: <Lightbulb className="w-5 h-5" />, text: "טיפים שילוו אותך בהמשך בהתבסס על הניסיון והרקע שלי" },
              { icon: <Image className="w-5 h-5" />, text: "תמונות סטילס איכותיות מוכנות לפרסם" },
          { icon: <GraduationCap className="w-5 h-5" />, text: "הכוונה להשתלמויות נוספות במידת הצורך" }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "השתלמות צילום ועריכת סרטונים",
    description: "למדי לצלם ולערוך סרטונים בצורה פשוטה אך מקצועית ופרקטית",
    image: hishtalmut2,
    sections: [
      {
        title: "יסודות הצילום",
        items: [
          { icon: <Smartphone className="w-5 h-5" />, text: "הכרת המצלמה באייפון, הגדרות צילום ותצוגה" },
          { icon: <Settings className="w-5 h-5" />, text: "העמדה מקצועית ונכונה של עמדת עבודה והצילום" },
          { icon: <Camera className="w-5 h-5" />, text: "זוויות צילום והעמדת הדוגמנית" },
          { icon: <Smartphone className="w-5 h-5" />, text: "הכרת אפליקציות לצילום מקצועי וטכניקות נפוצות" }
        ]
      },
      {
        title: "מה נצלם?",
        items: [
          { icon: <Play className="w-5 h-5" />, text: "צילום לפני ואחרי" },
          { icon: <Brush className="w-5 h-5" />, text: "צילום של 2-3 שלבים בתהליך האיפור שלך תוך כדי שאת מדריכה את הדוגמנית" },
          { icon: <Palette className="w-5 h-5" />, text: "צילום של 2-3 מוצרי איפור" }
        ]
      },
      {
        title: "עריכה ופרסום",
        items: [
          { icon: <Edit className="w-5 h-5" />, text: "עריכת הסרטונים שצילמנו לסרטון גמור" },
          { icon: <Video className="w-5 h-5" />, text: "כתוביות, מוזיקה ברשת" },
          { icon: <TrendingUp className="w-5 h-5" />, text: "העלאת הסרטון לרשת ודגשים חשובים לפני הפרסום" }
        ]
      },
      {
        title: "מה תקבלי?",
        items: [
          { icon: <Clock className="w-5 h-5" />, text: "מפגש של 4 שעות" },
          { icon: <Award className="w-5 h-5" />, text: "תעודת השתתפות" },
          { icon: <Video className="w-5 h-5" />, text: "סרטון ערוך ומוכן לפרסום" }
        ]
      },
      {
        title: "בונוס",
        items: [
          { icon: <Image className="w-5 h-5" />, text: "טיפים לצילום תמונות סטילס" }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "השתלמות מיתוג וסושיאל",
    description: "שדרוג המותג שלך ובניית נוכחות מוצלחת במדיה החברתית למשיכת לקוחות",
    image: hishtalmut1,
    sections: [
      {
        title: "בניית המותג",
        items: [
          { icon: <Star className="w-5 h-5" />, text: "הגדרת המותג האישי שלך" },
          { icon: <Eye className="w-5 h-5" />, text: "יצירת חזון ברור ומדויק לעסק" },
          { icon: <Target className="w-5 h-5" />, text: "אפיון עסקי ויצירת בידול עסקי" },
          { icon: <Users className="w-5 h-5" />, text: "בניית מיינדסט עסקי והתנהלות מקצועית מול לקוחות ולדות" }
        ]
      },
      {
        title: "ניהול סושיאל",
        items: [
          { icon: <TrendingUp className="w-5 h-5" />, text: "יסודות ניהול הסושיאל" },
          { icon: <Instagram className="w-5 h-5" />, text: "בניית פרופיל אינסטגרם חזק ומושך" },
          { icon: <Sparkles className="w-5 h-5" />, text: "אסטרטגיית מיתוג ותוכנית מותאמת אישית" },
          { icon: <MessageCircle className="w-5 h-5" />, text: "יצירת תוכן שמכוון אליך לידים" },
          { icon: <Edit className="w-5 h-5" />, text: "עריכת סטוריז" }
        ]
      },
      {
        title: "מה תקבלי?",
        items: [
          { icon: <Clock className="w-5 h-5" />, text: "מפגש אחד על אחד של 4 שעות" },
          { icon: <Award className="w-5 h-5" />, text: "תעודת השתתפות" },
          { icon: <Heart className="w-5 h-5" />, text: "ליווי של 5 ימי עסקים עם משימות לתרגול" }
        ]
      },
      {
        title: "בונוסים",
        items: [
          { icon: <Gift className="w-5 h-5" />, text: "צילומי תדמית ו-3 תמונות ערוכות" },
          { icon: <Zap className="w-5 h-5" />, text: "משימות לתרגול בבית עם ליווי אישי" }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "פריצה לתחום הכלות",
    description: "בניית אסטרטגיה שיווקית והתנהלות עסקית נכונה על מנת לפרוץ לתחום הכלות",
    image: hishtalmut3,
    sections: [
      {
        title: "הכרות ואבחון",
        items: [
          { icon: <Search className="w-5 h-5" />, text: "הכירות והבנה של הנקודה בה את נמצאת כיום" },
          { icon: <MessageCircle className="w-5 h-5" />, text: "דיון פתוח על שאלות ואתגרים אישיים שאת נתקלת בהם בעבודה שלך" },
          { icon: <TrendingUp className="w-5 h-5" />, text: "נקודות לשיפור בניהול העסק" },
          { icon: <Instagram className="w-5 h-5" />, text: "נקודות לשיפור במדיה החברתית" }
        ]
      },
      {
        title: "אסטרטגיה עסקית",
        items: [
          { icon: <Target className="w-5 h-5" />, text: "הצבת יעדים ומטרות לשנה הקרובה" },
          { icon: <Shield className="w-5 h-5" />, text: "התנהלות עסקית נכונה ומעקב אחרי לידים" },
          { icon: <Crown className="w-5 h-5" />, text: "בניית אסטרטגיית שיווק לעולם הכלות" },
          { icon: <Edit className="w-5 h-5" />, text: "בניית תוכן לפי האופי של העסק שלך" },
          { icon: <Star className="w-5 h-5" />, text: "בידול עסקי מהמתחרים" }
        ]
      },
      {
        title: "עבודה מול כלות",
        items: [
          { icon: <Users className="w-5 h-5" />, text: "התנהלות נכונה ומקצועית מול כלה" },
          { icon: <Phone className="w-5 h-5" />, text: "שיחת מכירה מול כלה" }
        ]
      },
      {
        title: "מה תקבלי?",
        items: [
          { icon: <Clock className="w-5 h-5" />, text: "מפגש אחד ללא הגבלת זמן" },
          { icon: <Award className="w-5 h-5" />, text: "תעודת השתתפות" },
          { icon: <MessageSquare className="w-5 h-5" />, text: "אפשרות להתייעצות נוספת בוואטסאפ אחרי המפגש ללא הגבלה" }
        ]
      }
    ]
  }
];

const HishtalmutItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = "+972527587175";
    const message = `היי אנסטסיה ,אני רוצה לשמוע ממך עוד על ${item.title}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className={styles.hishtalmutItem}>
      <div className={styles.hishtalmutHeader} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.hishtalmutContent}>
          <div className={styles.hishtalmutText}>
            <h3 className={styles.hishtalmutTitle}>{item.title}</h3>
            <p className={styles.hishtalmutDescription}>{item.description}</p>
          </div>
          <div className={styles.hishtalmutImage}>
            <img src={item.image} alt={item.title} />
          </div>
        </div>
        <div className={styles.hishtalmutToggle}>
          {isOpen ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
        </div>
      </div>
      
      {isOpen && (
        <div className={styles.hishtalmutSyllabus}>
          {item.sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className={styles.syllabusSection}>
              <h4 className={styles.sectionTitle}>{section.title}</h4>
              <div className={styles.sectionItems}>
                {section.items.map((syllabusItem, itemIndex) => (
                  <div key={itemIndex} className={styles.syllabusItem}>
                    <div className={styles.syllabusIcon}>
                      {syllabusItem.icon}
                    </div>
                    <span className={styles.syllabusText}>{syllabusItem.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          <div className={styles.whatsappButtonWrapper}>
            <button 
              className={styles.whatsappButton} 
              onClick={handleWhatsAppClick}
            >
              <MessageSquare className="w-5 h-5" />
              <span>שלחי הודעה לפרטים נוספים</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const Hishtalmut = () => {
  return (
    <div className={styles.hishtalmutContainer}>
      <div className={styles.hishtalmutWrapper}>
        {hishtalmutData.map(item => (
          <HishtalmutItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Hishtalmut;