import LandingPage from './Components/LandingPage';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage/>}/>
            </Routes>
      </Router>
    </div>
  );
}