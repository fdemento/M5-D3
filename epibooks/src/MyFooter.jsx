import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
      <footer className="bg-dark text-white">
        <Container className="py-3">
          <Row>
            <Col md={6} className="py-3">
              <h4>Epibooks Footer</h4>
              <p>Esercitazione del Modulo 3 - Settimana 3</p>
            </Col>
            <Col md={6} className="py-3 d-flex justify-content-md-end justify-content-center">
              <div>
                <h4>Contatti</h4>
                <p>Indirizzo: Via Esempio, 42, 12345 Città</p>
                <p>Email: info@lamialibreria.com</p>
                <p>Telefono: 0123456789</p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  };
  
  export default Footer;