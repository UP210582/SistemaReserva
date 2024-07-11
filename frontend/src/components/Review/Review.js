import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

function ReviewItem({ text }) {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Text>
          <i className="bi bi-person-circle me-2"></i>
          {text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

function Reviews() {
  const reviewsData = [
    "Excelente comida y servicio",
    "Ambiente muy agradable",
    "Volveré pronto",
    "Platos deliciosos",
    "Atención impecable",
    "Precios razonables"
  ];

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Reseñas</h2>
      <Row>
        {reviewsData.map((review, index) => (
          <Col key={index} md={4}>
            <ReviewItem text={review} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Reviews;