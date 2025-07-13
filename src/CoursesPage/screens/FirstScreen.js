import styles from "./FirstScreen.module.css"
import { Footprints, Monitor, Clock } from "lucide-react"

const FirstScreen = () => {
  return <>
    <div className={styles.title} style={{paddingTop:"80px"}}>ברוכה הבאה פרינססה</div>
    <div className={styles.description}>
      אם הגעת לכאן סימן שאת אוהבת ללמוד ומחפשת
להתפתח בפן האישי והמקצועי אבל..
    </div>
    
    <div className={styles.featuresContainer}>
      <div className={styles.featureItem}>
        <Monitor className={styles.icon} />
        <span className={styles.featureText}>מהמחשב שלך</span>
      </div>
      <div className={styles.featureItem}>
        <Clock className={styles.icon} />
        <span className={styles.featureText}>בזמן שלך</span>
      </div>
      <div className={styles.featureItem}>
        <Footprints className={styles.icon} />
        <span className={styles.featureText}>ובקצב שלך</span>
      </div>
    </div>
    

    <div className={styles.title}>ולכן</div>
    <div className={styles.description}>קיבצתי עבורך את הקורסים הדיגיטלים שלי</div>
    <div className={styles.title}>תחזיקי חזק.. ככה זה עובד:</div>
  </>
}

export default FirstScreen