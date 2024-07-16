import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Calendar.css'; // Asegúrate de crear este archivo para los estilos

function Calendar() {
  const navigate = useNavigate();
  const today = new Date();
  const month = today.getMonth(); // Mes actual (0-11)
  const year = today.getFullYear(); // Año actual
  const currentDay = today.getDate(); // Día actual

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Obtener el primer día del mes
  const firstDay = new Date(year, month, 1).getDay();
  // Obtener el número de días en el mes actual
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Manejar el clic en un día del calendario
  const handleDayClick = (day) => {
    // Navegar a la nueva ruta con la fecha
    navigate(`/reservation2?date=${year}-${month + 1}-${day}`);
  };

  // Generar las semanas y días del calendario
  const generateCalendar = () => {
    const weeks = [];
    let week = [];
    let day = 1;

    // Agregar días vacíos al inicio de la primera semana
    for (let i = 0; i < firstDay; i++) {
      week.push(<td key={`empty-${i}`} className="empty"></td>);
    }

    // Agregar días del mes
    for (let i = firstDay; i < 7; i++) {
      week.push(
        <td key={day} className={day === currentDay ? "current-day" : ""} onClick={() => handleDayClick(day)}>
          {day}
        </td>
      );
      day++;
    }

    // Agregar la primera semana al array de semanas
    weeks.push(<tr key={`week-1`}>{week}</tr>);

    // Agregar las semanas restantes
    while (day <= daysInMonth) {
      week = [];
      for (let i = 0; i < 7; i++) {
        if (day <= daysInMonth) {
          week.push(
            <td key={day} className={day === currentDay ? "current-day" : ""} onClick={() => handleDayClick(day)}>
              {day}
            </td>
          );
          day++;
        } else {
          week.push(<td key={`empty-${day + i}`} className="empty"></td>);
        }
      }
      weeks.push(<tr key={`week-${weeks.length + 1}`}>{week}</tr>);
    }

    return weeks;
  };

  return (
    <table className="calendar">
      <thead>
        <tr>
          <th colSpan="7">{monthNames[month]} {year}</th>
        </tr>
        <tr>
          <th>S</th><th>M</th><th>T</th><th>W</th><th>T</th><th>F</th><th>S</th>
        </tr>
      </thead>
      <tbody>
        {generateCalendar()}
      </tbody>
    </table>
  );
}

export default Calendar;
