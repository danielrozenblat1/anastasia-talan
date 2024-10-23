
import './App.css';
import ByMe from './components/ByMe/ByMe';
import AboutMe from './components/me/Me';
import NavBarNew from './components/NewNav/NavBarNew';
import Sillabus from './components/sillabus/Sillabus';
import EightScreen from './screens/EightScreen';
import FifthScreen from './screens/FifthScreen';
import FirstScreen from './screens/FirstScreen';
import ForthScreen from './screens/ForthScreen';
import SecondScreen from './screens/SecondScreen';
import SeventhScreen from './screens/SeventhScreen';
import SixthScreen from './screens/SixthScreen';
import ThirdScreen from './screens/ThirdScreen';

function App() {
  return <>
  {/* <NavBarNew/> */}
  <FirstScreen/>
  <SecondScreen/>
  <ThirdScreen/>
  <Sillabus/>
  {/* <ForthScreen/> */}
  <SixthScreen/>
  <EightScreen/>

  <FifthScreen/>
  <AboutMe/>
  <SeventhScreen/>
  <ByMe/>
  </>
}

export default App;
