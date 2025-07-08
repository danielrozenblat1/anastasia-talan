import ByMe from "../components/ByMe/ByMe"
import NavBarNew from "../components/NewNav/NavBarNew"
import FirstScreen from "./screens/FirstScreen"
import MakeupCourse from "./screens/SecondScreen"
import styles from "./Wrapper.module.css"
const CoursesWrapper=()=>{


return <>

<NavBarNew/>
<FirstScreen/>
<MakeupCourse/>
<ByMe/>
</>

}
export default CoursesWrapper