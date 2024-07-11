import React from 'react';
import Calendar from '../Calendar'; // Vamos a crear este componente

function ReservationPage() {
  return (
    <div className="reservation-page">
      <h1>Restarante Delicias</h1>
      <Calendar />
      <div className="info-section">
        <div>
          <h2>Location</h2>
          <p>[Dirección del restaurante]</p>
        </div>
        <div>
          <h2>Hours</h2>
          <p>[Horario del restaurante]</p>
        </div>
        <div>
          <h2>Contact us</h2>
          <p>[Información de contacto]</p>
        </div>
      </div>
    </div>
  );
}

export default ReservationPage;