import styles from "./FirstScreen.module.css"
const FirstScreen=()=>{

return <>
<div>
    <div className={styles.title} style={{ paddingTop:80}}>Welcome</div>
<div className={styles.description}>אם הגעת לכאן, כנראה שאת מאפרת שמבינה דבר אחד -
שמי שלא ממשיכה ללמוד, פשוט נשארת מאחור.</div>
<div className={styles.description}>התחום מתחדש, הלקוחות רואות הכל באינסטגרם וטיקטוק,
ומה שעבד אתמול - כבר לא מספיק מחר.</div>
    <div className={styles.title}>מאפרת שרוצה להמשיך להתבלט</div>
<div className={styles.description}>

    ובין היתר להעלות מחירים,
ולבנות לעצמה שם - לא יכולה להרשות לעצמה להישאר באותה נקודה.
</div>
  <div className={styles.title}>ולכן</div>
  <div className={styles.description}>
יצרתי עבורך 2 מאסטר קלאסים ממוקדים ומרוכזים בנושאים שיעזרו לך להתפתח כמאפרת, לחדד את הטכניקה שלך וללמוד טכניקות חדשות
</div>
 <div className={styles.title}>המאסטרקלאסים שלי:</div>
</div>
</>



}
export default FirstScreen