import React, { useState, useEffect } from 'react';
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
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CustomButton from '../Button';

const BASE_URL = 'http://localhost:8787';

function ReservationsPage() {
  const [userName, setUserName] = useState('');
  const [reservations, setReservations] = useState([]);
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [formData, setFormData] = useState({
    date: '',
    hour: '',
    people: '',
    reason: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    const userId = sessionStorage.getItem('userId');
    const userFirstName = sessionStorage.getItem('userFirstName');
    const userLastName = sessionStorage.getItem('userLastName');

    if (!userId) {
      navigate('/reservinfo');
      return;
    }

    setUserName(`${userFirstName} ${userLastName}`);
    fetchReservations(userId);
  }, [navigate]);

  const fetchReservations = async (userId) => {
    try {
      const response = await fetch(`${BASE_URL}/reservations/buscar/userid/${userId}`);
      const data = await response.json();
      console.log('Fetched data:', data); // Log fetched data
      setReservations(data);
    } catch (error) {
      console.error('Error fetching reservations:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`${BASE_URL}/reservations/baja/${id}`, { method: 'DELETE' });
      setReservations(reservations.filter((reservation) => reservation.id !== id));
    } catch (error) {
      console.error('Error deleting reservation:', error);
    }
  };

  const handleEdit = (reservation) => {
    setSelectedReservation(reservation);
    setFormData({
      date: reservation.date,
      hour: reservation.hour,
      people: reservation.people,
      reason: reservation.reason,
    });
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedReservation(null);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    const userId = sessionStorage.getItem('userId');
    try {
      if (selectedReservation) {
        await fetch(`${BASE_URL}/reservations/actualizar/${selectedReservation.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...formData, userId }),
        });
      } else {
        await fetch(`${BASE_URL}/reservations/alta`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...formData, userId }),
        });
      }
      fetchReservations(userId);
      handleCloseDialog();
    } catch (error) {
      console.error('Error saving reservation:', error);
    }
  };

  const formatDate = (dateArray) => {
    console.log('Raw dateArray:', dateArray); // Log raw date array
    if (Array.isArray(dateArray) && dateArray.length === 3) {
      const [year, month, day] = dateArray;
      return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    }
    return ''; // Return empty string if format is incorrect
  };

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
          margin="normal"
          InputProps={{
            readOnly: true,
          }}
        />
        <Box sx={{ mt: 2, mb: 4 }}>
          <CustomButton to="/reservation2" onClick={() => handleEdit(null)}>
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
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reservations.map((reservation) => (
                <TableRow key={reservation.id}>
                  <TableCell>{formatDate(reservation.reservationDate)}</TableCell>
                  <TableCell>{reservation.reservationTime}</TableCell>
                  <TableCell>{reservation.numberOfPeople}</TableCell>
                  <TableCell>{reservation.reason}</TableCell>
                  <TableCell>
                    <IconButton size="small" aria-label="edit" onClick={() => handleEdit(reservation)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton size="small" aria-label="delete" onClick={() => handleDelete(reservation.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>{selectedReservation ? 'Edit Reservation' : 'Add Reservation'}</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              name="date"
              label="Date"
              type="date"
              fullWidth
              variant="standard"
              value={formData.date}
              onChange={handleFormChange}
            />
            <TextField
              margin="dense"
              name="hour"
              label="Hour"
              type="time"
              fullWidth
              variant="standard"
              value={formData.hour}
              onChange={handleFormChange}
            />
            <TextField
              margin="dense"
              name="people"
              label="People"
              type="number"
              fullWidth
              variant="standard"
              value={formData.people}
              onChange={handleFormChange}
            />
            <TextField
              margin="dense"
              name="reason"
              label="Reason"
              fullWidth
              variant="standard"
              value={formData.reason}
              onChange={handleFormChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button onClick={handleSave}>Save</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Container>
  );
}

export default ReservationsPage;
