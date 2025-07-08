
import Box from "../../components/box/Box"
import styles from "./FifthScreen.module.css"
import makeup from "../../Icons/wired-outline-1599-powder-makeup-face-hover-pinch (2).json"
import vip from "../../Icons/wired-outline-1003-vip-hover-pinch.json"
import change from "../../Icons/wired-outline-1598-makeup-hover-pinch.json"
import NewBox from "../../components/NewBox/NewBox"
import Recommends from "../../components/recommends/Recommends"
import meet from "../../Icons/wired-outline-981-consultation-hover-conversation (1).json"
import party from "../../Icons/wired-outline-1103-confetti-hover-pinch.json"
import MessageButton from "../../components/MessageButton/Button"
import bikorot from "../../images/אנסטסיה ביקורות כלות.png"
const FifthScreen=()=>{


return <>

    <div className={styles.title} id="כלה">את עומדת להתחתן??</div>
    <div className={styles.description}>קודם כל, המון מזל טוב! היום הכי חשוב בחיים שלך מתקרב!</div>
    <div className={styles.description}>ואני בטוחה אם את כאן את מעוניינת לדעת איך התהליך איתי קורה..</div>
    <div className={styles.title}>אז ישר ולעניין!</div>
    <div className={styles.subtitle}>אני שמה דגש על שלושה דברים עיקריים בעבודה שלי עם כל כלה</div>
    <div className={styles.row}>
    <Box title="התאמה אישית אלייך" description="כל כלה היא מיוחדת! יש לה עור שונה, תווי פנים שונים ,סגנון מועדף ואת המראה שהיא חלמה עליו בחתונה שלה ולכן חשוב לי להתאים את האיפור בדיוק לרצונות שלך " icon={makeup}/>
    <Box title="חוויה בוטיקית ויוקרתית" description="אני איתך! אחת על אחת! מהבוקר עד לרגע שאת נכנסת לחופה! שמחה יחד איתך,מקלילה ברגעים המלחיצים יותר ומשריינת את כל היום שלי אך ורק אלייך!" icon={vip}/>
    <Box title="מקום לתיקונים ושינויים" description="ברגע שהאיפור כבר עלייך חשוב לי שתביני שיש לך את הsafe space לבוא אלי במידה ואת רוצה שינוי כלשהו! אני איתך כל שעות הבוקר ולא הולכת עד שאת לא מרוצה 200%" icon={change}/>

    </div>
    <div className={styles.subtitle}>והתהליך איתי עובד בצורה הבאה</div>
    <div className={styles.row}>
    <NewBox title="שיחת הכרות" icon={makeup} description=" שיחת ייעוץ של כחצי שעה הכוללת היכרות, הבנה עמוקה של הצרכים והתאמת חבילות וכמובן לאחר שריון אני זמינה לך עד מועד החתונה"/>
    <NewBox title="פגישת ייעוץ" icon={meet} description="אנחנו נפגשות פנים מול פנים כחודש לפני החתונה כדי להבין איזה סוג איפור את רוצה וצריכה,אנחנו בונות לך לוז ליום החתונה, צק ליסט והדרכה מותאמת אלייך להכנת והזנת העור שלך"/>
    <NewBox title="היום הגדול" icon={party} description="ביום הכי גדול בחיים שלך אני אופיע מולך כבר בבוקר , אאפר אותך, אקליל אווירה ואעזור ליום שלך להיות הכי מושלם שיש"/>

    </div>
    <div className={styles.title}>טעימה לכלות ולנשים שבחרו בי</div>
    <Recommends/>
    <MessageButton text="אנסטסיה התארסתייי , בואי נדבר!" message="היי אנסטסיה, אני רוצה לשמוע עוד לגבי איפור לחתונה"/>
    <div className={styles.title}>כדי לשמוע מהן עוד לחצי על התמונה</div>
    <div className={styles.center}><a target="_blank" href="https://www.mit4mit.co.il/biz/99556"><img className={styles.image} src={bikorot} alt="כלות ממליצות אנסטסיה טלן"/></a></div>
</>


}
export default FifthScreen