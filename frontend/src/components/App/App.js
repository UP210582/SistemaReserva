// App.js
import React from 'react';
import Header from '../Header';
import ImageCarousel from '../ImageCarousel';
import ReservationButton from '../Button';
import Reviews from '../Review';
import Contact from '../Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container py-4">
        <ImageCarousel />
        <div className="text-center my-4">
          <ReservationButton />
        </div>
        <Reviews />
      </main>
      <Contact />
    </div>
  );
}

export default App;