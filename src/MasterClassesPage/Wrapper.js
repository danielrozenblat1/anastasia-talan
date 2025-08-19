import ByMe from "../components/ByMe/ByMe"
import NavBarNew from "../components/NewNav/NavBarNew"
import PrivacyPolicy from "../privacy/Privacy"
import { MasterclassSection } from "./MasterClass/Masterclass"
import FirstScreen from "./screens/FirstScreen"
import styles from "./Wrapper.module.css"
const MasterclassesWrapper=()=>{


return <>
<div>
<NavBarNew/>
<FirstScreen/>
<MasterclassSection/>
<PrivacyPolicy 
  ownerName="אנסטסיה טלן חכים" 
  email="nastiatalan@gmail.com" 
  phone="052-758-7175" 
  domain="http://anastasiatalanhakim.co.il/" 
/>
<ByMe/>
</div>
</>

}
export default MasterclassesWrapper