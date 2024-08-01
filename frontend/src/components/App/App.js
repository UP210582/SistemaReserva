import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../HomePage';
import ReservPage2 from '../ReservPage2';
import PaymentPage from '../PaymentPage';
import Login from '../LoginPage/SingIn';
import SingUp from '../LoginPage/SingUp';
import ReservInfo from '../ReservInfo';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/loginpage" element={<Login />} />
          <Route path="/register" element={<SingUp />} />
          <Route path="/reservinfo" element={<ReservInfo />} />
          <Route path="/reservation2" element={<ReservPage2 />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
