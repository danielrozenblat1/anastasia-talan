
import Wrapper from './AboutPage/Wrapper';
import './App.css';
import BridesWrapper from './MasterClassesPage/Wrapper';
import CoursesWrapper from './CoursesPage/Wrapper';
import MakeupWrapper from './MakeupPage/Wrapper';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  

  return <>
  
   <Router>
    <Routes>
    <Route path="/" index element={<Wrapper/>}/>
    <Route path="/masterclass" index element={<BridesWrapper/>}/>
  <Route path="/hishtalmut" index element={<MakeupWrapper/>}/>
  <Route path="/Courses" index element={<CoursesWrapper/>}/>

 </Routes>
 </Router>
 </>
}

export default App;
