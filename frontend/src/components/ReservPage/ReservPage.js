import React from 'react';
import Calendar from './Calendar';
import Contact from '../Contact';
import CustomButton from '../Button';

function ReservationPage() {
  return (
    <div className="reservation-page">
      <h1>Restaurante Delicias</h1>
      <Calendar />
      <div className="info-section">
      <CustomButton to="/">Cancelar</CustomButton>
      <Contact />
      </div>
    </div>
  );
}

export default ReservationPage;