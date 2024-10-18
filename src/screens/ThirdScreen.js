import IconTextComponent from "../components/can/Can"
import styles from "./ThirdScreen.module.css"
import fault from "../Icons/wired-lineal-25-error-cross-hover-pinch.json"
import anastasiaInsta from "../images/אינסטסיה טלן אינסטגרם.png"
const ThirdScreen=()=>{


return <>
    {/* <div className={styles.description}>כי גם אני</div>
    <div className={styles.row}>
    <IconTextComponent text="לא הצלחתי לפרוץ באינסטגרם ולקבל פניות" icon={fault}/>
    <IconTextComponent text="התנהלתי בחוסר יעילות מול לקוחות" icon={fault}/>
    <IconTextComponent text="הרגשתי פחות בטוחה בטכניקות מסויימות" icon={fault}/>

    </div> */}

    <div className={styles.description}>מאז שהתחילה הקורונה הבנתי את כוח של הרשתות החברתיות וכמה להיות נוכחת בסושיאל <div className={styles.bold}>יכול לשנות את החיים שלך!</div></div>
    <div className={styles.description}>אז התחלתי לצאת לכנסים, לקחתי השתלמויות וקורסים באלפי שקלים והשקעתי המון עד למצב שהכלי הזה שנקרא אינסטגרם <div className={styles.bold}>עובד בשבילי</div></div>
    <div className={styles.center}><img className={styles.image} alt="אנסטסיה טלן" src={anastasiaInsta}/></div>
    <div className={styles.title}>ואחרי שהצלחתי בעצמי</div>
    {/* <div className={styles.description}>ואם בתחילת דרכי הייתי מקבלת את הכלים והידע שצברתי עד היום- מיסטר חכים (בעלי למי שלא עוקבת..) היה מודה לי מאוד - כי הידע שצברתי הגיע עשרות אלפי שקלים  </div> */}
    <div className={styles.description}>הכנתי במיוחד עבור מאפרת תותחית כמוך שרוצה לקחת את העסק שלה <div className={styles.bold}>צעד אחד קדימה </div>את הקורס שיקנה לך את כל הכלים,הטכניקות והטיפים שאת צריכה כדי לעשות את זה!</div>
    <div className={styles.title}>תכיני דף ועט.. יוצאות לדרך!</div>
 
</>


}
export default ThirdScreen