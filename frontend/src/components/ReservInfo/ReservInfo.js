import React, { useState } from 'react';import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  TextField,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CustomButton from '../Button';

function ReservationsPage() {
  const [userName, setUserName] = useState('');
  const [reservations, setReservations] = useState([
    { date: '2024-08-01', hour: '18:00', people: 4, reason: 'Birthday', payment: 'Credit Card' },
    { date: '2024-08-02', hour: '19:30', people: 2, reason: 'Anniversary', payment: 'Cash' },
  ]);

  const addReservation = () => {
    // Logic to add a new reservation
    console.log('Add new reservation');
  };
  const navigate = useNavigate();

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisitedPaymentPage');

    if (hasVisited) {
      navigate('/');
    } else {
      sessionStorage.setItem('hasVisitedPaymentPage', 'true');
    }

    return () => {
      sessionStorage.removeItem('hasVisitedPaymentPage');
    };
  }, [navigate]);

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Reservations Information
        </Typography>
        <TextField
          fullWidth
          label="User Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          margin="normal"
        />
        <Box sx={{ mt: 2, mb: 4 }}>
        <CustomButton to="/reservation2" onClick={addReservation}>
            Reservar Ahora
          </CustomButton>
        </Box>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Hour</TableCell>
                <TableCell>People</TableCell>
                <TableCell>Reason</TableCell>
                <TableCell>Payment</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reservations.map((reservation, index) => (
                <TableRow key={index}>
                  <TableCell>{reservation.date}</TableCell>
                  <TableCell>{reservation.hour}</TableCell>
                  <TableCell>{reservation.people}</TableCell>
                  <TableCell>{reservation.reason}</TableCell>
                  <TableCell>{reservation.payment}</TableCell>
                  <TableCell>
                    <IconButton size="small" aria-label="edit">
                      <EditIcon />
                    </IconButton>
                    <IconButton size="small" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}

export default ReservationsPage;