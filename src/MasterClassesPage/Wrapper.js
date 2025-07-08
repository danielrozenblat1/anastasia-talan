import NavBarNew from "../components/NewNav/NavBarNew"
import FirstScreen from "./screens/FirstScreen"
import styles from "./Wrapper.module.css"
const MasterclassesWrapper=()=>{


return <>
<div style={{background:"white", height:"100vh"}}>
<NavBarNew/>
<FirstScreen/>
</div>
</>

}
export default MasterclassesWrapper