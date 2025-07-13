import SmallBox from "../../components/SmallBox/SmallBox"
import styles from "./SecondScreen.module.css"
import makeup from "../../Icons/wired-outline-1587-cosmetic-brush-hover-pinch.json"
const SecondScreen=()=>{


  return <>
    <div className={styles.title} style={{paddingTop:"80px"}}>אם הגעת לכאן</div>
    <div className={styles.description}>סימן שאת מאפרת תותחית שרוצה להצליח ולהרים את העסק שלך</div>
        <div className={styles.title}>אבל..</div>
            <div className={styles.description}>הבנת שלנהל עסק רווחי ומצליח בתחום האיפור, לא מסתכם רק בלעשות את מה שאת אוהבת</div>
                    <div className={styles.title}>את צריכה גם</div>
                    <div className={styles.row}>
    <SmallBox text="לחזק את הטכניקות הקיימות וללמוד סגנונות חדשים" icon={makeup}/>
    <SmallBox text="לשווק את עצמך ברשתות ולהחשף לקהל רחב יותר" icon={makeup}/>
                    </div>
                         <div className={styles.row}>
    <SmallBox text="להראות כמאפרת רצינית שיכולה לתמחר בהתאם" icon={makeup}/>
                            <SmallBox text="להוציא תוכן ברמה גבוהה שיביא לך פניות" icon={makeup}/>
                    </div>
                             <div className={styles.title}>ולכן</div>
                                <div className={styles.description}>ריכזתי עבורך את כל ההשתלמויות הפרטיות שאני מעבירה כך שתוכלי לבחור את התחום שבו את מתקשה ביותר, לחזק את עצמך ולרכוש כלים חדשים:</div>
    </>
}
export default SecondScreen