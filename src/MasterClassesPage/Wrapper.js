import ByMe from "../components/ByMe/ByMe"
import NavBarNew from "../components/NewNav/NavBarNew"
import { MasterclassSection } from "./MasterClass/Masterclass"
import FirstScreen from "./screens/FirstScreen"
import styles from "./Wrapper.module.css"
const MasterclassesWrapper=()=>{


return <>
<div>
<NavBarNew/>
<FirstScreen/>
<MasterclassSection/>
<ByMe/>
</div>
</>

}
export default MasterclassesWrapper