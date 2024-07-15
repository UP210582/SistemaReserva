import React from 'react';
import { Box, Typography, Grid, Avatar } from '@mui/material';

function ReviewItem({ content }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
      <Avatar sx={{ mr: 2 }}>U</Avatar>
      <Typography variant="body2">{content}</Typography>
    </Box>
  );
}

function Reviews() {
  const reviews = [
    { id: 1, content: 'Excelente comida y servicio.' },
    { id: 2, content: 'Ambiente muy agradable.' },
    { id: 3, content: 'Volveré pronto.' },
    { id: 4, content: 'Precios razonables.' },
    { id: 5, content: 'Menú variado.' },
    { id: 6, content: 'Personal muy amable.' },
  ];

  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>Reseñas</Typography>
      <Grid container spacing={2}>
        {reviews.map((review) => (
          <Grid item xs={12} sm={6} md={4} key={review.id}>
            <ReviewItem content={review.content} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Reviews;