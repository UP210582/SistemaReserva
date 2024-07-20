import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../HomePage';
import ReservPage2 from '../ReservPage2';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reservation2" element={<ReservPage2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
