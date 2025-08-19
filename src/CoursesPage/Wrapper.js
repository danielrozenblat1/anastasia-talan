import ByMe from "../components/ByMe/ByMe"
import NavBarNew from "../components/NewNav/NavBarNew"
import PrivacyPolicy from "../privacy/Privacy"
import FirstScreen from "./screens/FirstScreen"
import MakeupCourse from "./screens/SecondScreen"
import styles from "./Wrapper.module.css"
const CoursesWrapper=()=>{


return <>

<NavBarNew/>
<FirstScreen/>
<MakeupCourse/>
<PrivacyPolicy 
  ownerName="אנסטסיה טלן חכים" 
  email="nastiatalan@gmail.com" 
  phone="052-758-7175" 
  domain="http://anastasiatalanhakim.co.il/" 
/>
<ByMe/>
</>

}
export default CoursesWrapper