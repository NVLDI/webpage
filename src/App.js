import LandingPage from './Pages/Landing/LandingPage';
import Dashboard from './Components/DashboardPage';
import Hyderabad from './Pages/State/Hyderabad';
import Karnataka from './Pages/State/Karnataka';
import Maharashtra from './Pages/State/Maharashtra';
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
            </Routes>
      </Router>
    </div>
  );
}