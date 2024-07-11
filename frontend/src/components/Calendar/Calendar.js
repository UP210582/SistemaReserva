import React from 'react';

function Calendar() {
  // Aquí implementarías la lógica del calendario
  // Por ahora, usaremos una tabla simple como ejemplo

  return (
    <table className="calendar">
      <thead>
        <tr>
          <th colSpan="7">JUNE 2024</th>
        </tr>
        <tr>
          <th>S</th><th>M</th><th>T</th><th>W</th><th>T</th><th>F</th><th>S</th>
        </tr>
      </thead>
      <tbody>
        {/* Aquí irían las filas del calendario */}
      </tbody>
    </table>
  );
}

export default Calendar;