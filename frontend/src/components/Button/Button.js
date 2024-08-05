import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

function CustomButton({ children, to, onClick, type = 'button', ...props }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <Button
      type={type} // Establecer el tipo del botón
      variant="contained"
      color="primary"
      onClick={handleClick}
      {...props}
    >
      {children}
    </Button>
  );
}

export default CustomButton;
