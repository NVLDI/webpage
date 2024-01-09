import React from 'react';
import LandingPage from './Components/LandingPage';
import { Router, Route, Routes } from 'react-router';
function App() {
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

export default (App);
