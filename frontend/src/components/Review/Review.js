// Reviews.js
import React from 'react';

function ReviewItem({ text }) {
  return (
    <div className="review-item">
      <div className="user-icon">👤</div>
      <p>{text}</p>
    </div>
  );
}

function Reviews() {
  const reviewsData = [
    "Excelente comida y servicio",
    "Ambiente muy agradable",
    "Volveré pronto",
    // Más reseñas...
  ];

  return (
    <section className="reviews">
      <h2>Reseñas</h2>
      {reviewsData.map((review, index) => (
        <ReviewItem key={index} text={review} />
      ))}
    </section>
  );
}

export default Reviews;