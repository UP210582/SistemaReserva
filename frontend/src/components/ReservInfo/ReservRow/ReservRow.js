// components/ReservRow.js
import React from 'react';
import { TableRow, TableCell, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function ReservRow({ reservation }) {
  return (
    <TableRow>
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
  );
}

export default ReservRow;
