import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Contact() {
  return (
    <footer className="bg-light py-4">
      <Container>
        <h2 className="text-center mb-4">Contacto</h2>
        <Row>
          <Col md={3} className="mb-3">
            <p><i className="bi bi-envelope"></i> email@restaurante.com</p>
          </Col>
          <Col md={3} className="mb-3">
            <p><i className="bi bi-telephone"></i> +1 234 567 890</p>
          </Col>
          <Col md={3} className="mb-3">
            <p><i className="bi bi-geo-alt"></i> 123 Calle Principal, Ciudad</p>
          </Col>
          <Col md={3} className="mb-3">
            <p><i className="bi bi-globe"></i> www.restaurante.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Contact;