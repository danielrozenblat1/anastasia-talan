import NewBox from "../../components/NewBox/NewBox"
import styles from "./SecondScreen.module.css"
import social from "../../Icons/wired-outline-962-social-media-marketing-hover-pinch (1).json"
import  instagram from "../../Icons/wired-outline-2542-logo-instagram-morph-square.json"
import IconTextComponent from "../../components/can/Can"
import diamond from "../../Icons/wired-outline-724-diamond-luxury-precious-loop-cycle.json"
import crowd from "../../Icons/wired-outline-2374-crowdfunding-hover-click-plus.json"
const SecondScreen=()=>{


    return <>
    <div className={styles.description} id="מאפרת">אחרי שנים שאני חוקרת,לומדת,והכי חשוב.. מיישמת! אני יכולה להגיד לך בפה מלא</div>
    <div className={styles.title}>שאת יכולה</div>
    {/* <div className={styles.row}>
<NewBox title="לגרום לסושיאל לעבוד בשבילך" description="כמה פעמים ראית מאפרת שמצליחה ברשתות ואמרת לעצמך שאת הרבה טובה..? הרשתות החברתיות משחקות היום תפקיד חשוב מאוד בהצלחה שלנו" icon={instagram}/>
<NewBox title="למתג ולבדל את עצמך מאחרים" description="כמה פעמים ראית מאפרת שמצליחה ברשתות ואמרת לעצמך שאת הרבה טובה..? הרשתות החברתיות משחקות היום תפקיד חשוב מאוד בהצלחה שלנו" icon={instagram}/>
<NewBox title="להבין לעומק את האלגוריתם" description="כמה פעמים ראית מאפרת שמצליחה ברשתות ואמרת לעצמך שאת הרבה טובה..? הרשתות החברתיות משחקות היום תפקיד חשוב מאוד בהצלחה שלנו" icon={instagram}/>

    </div> */}
    <div className={styles.row}>
    <IconTextComponent text="למתג ולבדל את עצמך מאחרים" icon={diamond}/>
    <IconTextComponent text="להתנהל בחוכמה ויעילות מול לקוחות" icon={crowd}/>
    <IconTextComponent text="לגרום לסושיאל למלא את היומן שלך" icon={instagram}/>
    </div>
    <div className={styles.description}>כי ברגע שתדעי לנצל את הכלים שיש לך נכון</div>
    <div className={styles.title}>השמיים הם הגבול מבחינתך!</div>
    </>
}
export default SecondScreen