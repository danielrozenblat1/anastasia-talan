
import MessageButton from "../../components/MessageButton/Button"
import FAQItem from "../../components/questions/Questions"
import styles from "./SeventhScreen.module.css"

const SeventhScreen=()=>{


return <>

    <div className={styles.title}>תשובות לשאלות של הכלות שלי</div>
    <FAQItem question="את מגיעה עד למקום התארגנות של הכלה?" answer="כן, מגיעה לכל אזורי הארץ"/>
    <FAQItem question="אם אני לא רוצה לקחת ליווי לאולם?" answer="לא חייב בכלל! ליווי תלוי בהמון פרמטרים וזה משתנה מכלה לכלה, בשיחת ייעוץ נחליט יחד אם צריך ליווי או שאפשר לוותר."/>
    <FAQItem question="איך אני יודעת איזה חבילה הכי מתאימה לי?" answer="ברגע שאת לוחצת על הקישור את תעברי ישירות לוואטסאפ שלי שם נוכל לתאם שיחת ייעוץ פרטנית בה נכיר לעומק, אוכל לשמוע מה הצרכים שלך ולהתאים לך את החבילה הכי מדוייקת שיש"/>
    <FAQItem question="את עושה גם עיצוב שיער?" answer="אני מומחית לאיפור ולא לשיער - אני עובדת עם מאות מעצבי שיער ואני מעדיפה להשאיר את העבודה למומחה מאשר להוציא אותך עם תוצאה לא פחות ממושלמת! , לכן ,יש לי כמה אנשים מאוד מקצועיים שאני מוכנה להמליץ לך עליהם"/>
    <MessageButton text="אנסטסיה, בואי נדבר!"/>
</>


}
export default SeventhScreen