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
  <ByMe/>
  </>


}
export default Wrapper