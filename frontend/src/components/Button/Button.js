// Button.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Button() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/reservation');
  };

  return (
    <button onClick={handleClick} className="btn btn-primary">
      Hacer Reserva
    </button>
  );
}

export default Button;