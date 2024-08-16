import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInSide from './components/SignInSide';
import LandingPage from './LandingPage';
import TablePatient from './components/TablePatient';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SignInSide />} />
          <Route path="/LandingPage" element={<LandingPage />} />
          <Route path="/TablePatient" element={<TablePatient />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;