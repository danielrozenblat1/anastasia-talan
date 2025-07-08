import ByMe from "../components/ByMe/ByMe"
import NavBarNew from "../components/NewNav/NavBarNew"
import FirstScreen from  "./screens/FirstScreen"
import SecondScreen from "./screens/SecondScreen"
import styles from "./Wrapper.module.css"
const MakeupWrapper=()=>{


return <>
<NavBarNew/>
<SecondScreen/>
<FirstScreen/>
<ByMe/>
</>

}
export default MakeupWrapper