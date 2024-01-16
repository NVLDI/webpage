import LandingPage from './Pages/Landing/LandingPage';
import Dashboard from './Components/DashboardPage';
import Hyderabad from './Pages/State/Hyderabad';
import Karnataka from './Pages/State/Karnataka';
import Maharashtra from './Pages/State/Maharashtra';
import Contact from './Pages/Menu/Contact';
import About from './Pages/Menu/About';
import Login from './Login/Login';
import Signup from './Login/Register';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage/>}/>
                <Route exact path="/Dashboard" element={<Dashboard/>}/>
                <Route exact path="/Hyderabad" element={<Hyderabad/>}/>
                <Route exact path="/Karnataka" element={<Karnataka/>}/>
                <Route exact path="/Maharashtra" element={<Maharashtra/>}/>
                <Route exact path="/Contact" element={<Contact/>}/>
                <Route exact path="/About" element={<About/>}/>
                <Route exact path="/Login" element={<Login/>}/>
                <Route exact path="/Signup" element={<Signup/>}/>
            </Routes>
      </Router>
    </div>
  );
}