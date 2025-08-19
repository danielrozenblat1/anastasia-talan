import styles from "./Wrapper.module.css"
import ByMe from '../components/ByMe/ByMe';
import AboutMe from '../components/me/Me'
import NavBarNew from '../components/NewNav/NavBarNew';
import Sillabus from '../components/sillabus/Sillabus';
import EightScreen from './screens/EightScreen';
import FifthScreen from './screens/FifthScreen';
import FirstScreen from './screens/FirstScreen';

import SecondScreen from './screens/SecondScreen';
import SeventhScreen from './screens/SeventhScreen';
import SixthScreen from './screens/SixthScreen';
import ThirdScreen from "./screens/ThirdScreen"
import PrivacyPolicy from "../privacy/Privacy";

const Wrapper=()=>{



return <>
  <NavBarNew/>
  
  <FirstScreen/>
    <AboutMe/>
  {/* <SecondScreen/> */}
  {/* <ThirdScreen/> */}
  {/* <Sillabus/> */}
  {/* <ForthScreen/> */}
  {/* <SixthScreen/> */}
  {/* <EightScreen/> */}

  <FifthScreen/>

  <SeventhScreen/>
  <PrivacyPolicy 
  ownerName="אנסטסיה טלן חכים" 
  email="nastiatalan@gmail.com" 
  phone="052-758-7175" 
  domain="http://anastasiatalanhakim.co.il/" 
/>
  <ByMe/>
  </>


}
export default Wrapper