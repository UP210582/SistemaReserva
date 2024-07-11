// App.js
import React from 'react';
import Header from '../Header';
import ImageCarousel from '../ImageCarousel';
import ReservationButton from '../Button';
import Reviews from '../Review';
import Contact from '../Contact';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <ImageCarousel />
        <ReservationButton />
        <Reviews />
      </main>
      <Contact />
    </div>
  );
}

export default App;