import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, Grid, Typography, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Calendar() {
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());
  const today = new Date();

  useEffect(() => {
    if (date < today) {
      setDate(new Date(today.getFullYear(), today.getMonth(), 1));
    }
  }, [date, today]);

  const handleDayClick = (day) => {
    const selectedDate = new Date(date.getFullYear(), date.getMonth(), day);
    if (selectedDate >= today && selectedDate.getDay() !== 1) {
      navigate(`/reservation2?date=${selectedDate.toISOString().split('T')[0]}`);
    }
  };

  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const prevMonthDays = new Date(date.getFullYear(), date.getMonth(), 0).getDate(); // Days from the previous month

  const renderCalendarDays = () => {
    const days = [];
    const totalCells = 42; // 6 rows * 7 days

    for (let i = 0; i < totalCells; i++) {
      const dayNumber = i - firstDayOfMonth + 1;
      const isCurrentMonth = dayNumber > 0 && dayNumber <= daysInMonth;
      const isPrevMonthDay = dayNumber <= 0;
      const currentDate = new Date(date.getFullYear(), date.getMonth(), isPrevMonthDay ? prevMonthDays + dayNumber : dayNumber);
      const isPastDate = currentDate < today;
      const isMonday = currentDate.getDay() === 1; // Assuming Monday is not selectable
      const isDisabled = isPastDate || isMonday;

      days.push(
        <Grid item xs key={i} style={{ padding: '2px' }}>
          <Paper 
            elevation={3} 
            style={{ 
              padding: '10px', 
              cursor: isDisabled ? 'not-allowed' : 'pointer', 
              textAlign: 'center',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: isDisabled ? '#f0f0f0' : 'white',
              color: isDisabled ? '#aaa' : 'black'
            }}
            onClick={() => !isDisabled && handleDayClick(dayNumber)}
          >
            {isCurrentMonth ? dayNumber : ''}
          </Paper>
        </Grid>
      );
    }
    return days;
  };

  const changeMonth = (increment) => {
    const newDate = new Date(date.getFullYear(), date.getMonth() + increment, 1);
    if (newDate >= new Date(today.getFullYear(), today.getMonth(), 1)) {
      setDate(newDate);
    }
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px', maxWidth: '500px', margin: 'auto' }}>
      <Grid container alignItems="center" justifyContent="space-between" style={{ marginBottom: '10px' }}>
        <IconButton onClick={() => changeMonth(-1)} disabled={date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <Typography variant="h5" align="center">
          {date.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </Typography>
        <IconButton onClick={() => changeMonth(1)}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Grid>
      <Grid container spacing={0} style={{ marginBottom: '10px' }}>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <Grid item xs key={day}>
            <Typography variant="subtitle2" align="center">{day}</Typography>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={0}>
        {renderCalendarDays()}
      </Grid>
    </Paper>
  );
}

export default Calendar;
