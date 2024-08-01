// components/ReservTable.js
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import ReservRow from './ReservRow'; // Asegúrate de que la ruta es correcta

function ReservTable({ reservations }) {
  return (
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
            <ReservRow key={index} reservation={reservation} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ReservTable;
