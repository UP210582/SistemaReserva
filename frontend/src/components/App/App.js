import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../Header';
import ImageCarousel from '../ImageCarousel';
import Button from '../Button';
import Reviews from '../Review';
import Contact from '../Contact';
import ReservationPage from '../ReservPage';

function HomePage() {
  return (
    <>
      <Header />
      <main className="container py-4">
        <ImageCarousel />
        <div className="text-center my-4">
          <Button />
        </div>
        <Reviews />
      </main>
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reservation" element={<ReservationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;