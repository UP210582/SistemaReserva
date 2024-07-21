import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

function CustomButton({ children, to, onClick, ...props }) {
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
