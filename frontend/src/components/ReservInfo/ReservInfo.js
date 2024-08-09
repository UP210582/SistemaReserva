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

const BASE_URL = 'http://146.190.1.249:8080';

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
      const response = await fetch(`${BASE_URL}/reservations/buscar/activo/userid/${userId}`);
      const data = await response.json();
      setReservations(data.filter(reservation => reservation.status === 'activo'));
    } catch (error) {
      console.error('Error fetching reservations:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const reservationData = {
        reservationDate: "2024-08-08",
        reservationTime: "00:00:00",
        numberOfPeople: 0,
        reason: "string",
        status: 'inactivo',
      };
  
      const response = await fetch(`${BASE_URL}/reservations/actualizar/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reservationData),
      });
  
      if (!response.ok) {
        throw new Error('Error updating reservation');
      }
  
      fetchReservations(sessionStorage.getItem('userId'));
    } catch (error) {
      console.error('Error deleting reservation:', error);
    }
  };

  const handleEdit = (reservation) => {
    setSelectedReservation(reservation);
    setFormData({
      date: reservation.reservationDate,
      hour: reservation.reservationTime.substring(0, 5), // Truncar para mostrar solo "HH:mm"
      people: reservation.numberOfPeople,
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

    if (name === 'date') {
      const today = new Date().toISOString().split('T')[0];
      if (value < today) {
        alert('No puedes seleccionar una fecha pasada.');
        return;
      }
    }

    if (name === 'people') {
      if (value < 1 || value > 10) {
        alert('La cantidad de personas debe estar entre 1 y 10.');
        return;
      }
    }

    if (name === 'reason') {
      const validReasons = ['Celebracion', 'Negocios', 'Casual'];
      if (!validReasons.includes(value)) {
        alert('Razón inválida. Las opciones válidas son: Celebracion, Negocios, Casual.');
        return;
      }
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    const userId = sessionStorage.getItem('userId');
    try {
      const reservationData = {
        reservationDate: formData.date,
        reservationTime: `${formData.hour}:00`, // Formato HH:mm:ss
        numberOfPeople: formData.people,
        reason: formData.reason,
        status: 'activo',
      };

      if (selectedReservation) {
        await fetch(`${BASE_URL}/reservations/actualizar/${selectedReservation.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(reservationData),
        });
      } else {
        await fetch(`${BASE_URL}/reservations/alta`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...reservationData, userId }),
        });
      }
      fetchReservations(userId);
      handleCloseDialog();
    } catch (error) {
      console.error('Error saving reservation:', error);
    }
  };

  const formatDate = (dateArray) => {
    if (Array.isArray(dateArray) && dateArray.length === 3) {
      const [year, month, day] = dateArray;
      return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    }
    return '';
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
              select
              SelectProps={{
                native: true,
              }}
            >
              <option value="Celebracion">Celebracion</option>
              <option value="Negocios">Negocios</option>
              <option value="Casual">Casual</option>
            </TextField>
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
