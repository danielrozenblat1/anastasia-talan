import IconTextComponent from "../../components/can/Can"
import TrainingHighlights from "../../components/what/What";
import styles from "./ForthScreen.module.css"
import questions from "../images/מענה לשאלות.png"
import technic from "../images/טכניקות.png"
import secrets from "../images/סודות.png"
import list from "../images/רשימה.png"
import PinkButton from "../../components/SellButton/SellButton";
const ForthScreen=()=>{
    const highlightsData = [
        { text: "מענה לכל שאלה שצצה בדרך", image: questions },
        { text: "טכניקות איפור חדשות שעוד לא הכרת", image: technic },
        { text: "את כל הסודות לרילס ופוסט ויראלי", image: secrets },
        { text: "רשימת תכנים ורעיונות שיעזרו לך להתפוצץ ברשתות", image: list },
      ];

return <>

    <div className={styles.title}>שכחתי להזכיר?</div>
    {/* <div className={styles.description}>ואם בתחילת דרכי הייתי מקבלת את הכלים והידע שצברתי עד היום- מיסטר חכים (בעלי למי שלא עוקבת..) היה מודה לי מאוד - כי הידע שצברתי הגיע עשרות אלפי שקלים  </div> */}
    <div className={styles.description}>כל מאפרת שרוכשת את הקורס מקבלת </div>
    <TrainingHighlights highlights={highlightsData} />
     <PinkButton text="אנסטסיה, אני רוצה לרכוש את הקורס!"/> 
</>


}
export default ForthScreen