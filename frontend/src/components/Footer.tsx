import { Container, Row, Col } from 'react-bootstrap';
import styles from '../styles/App.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
          <Col md={3} xs={6}>
            <h5>Producto</h5>
            <a href="#">Características</a>
            <a href="#">Precios</a>
            <a href="#">Seguridad</a>
          </Col>
          <Col md={3} xs={6}>
            <h5>Recursos</h5>
            <a href="#">Blog</a>
            <a href="#">Centro de Ayuda</a>
            <a href="#">Comunidad</a>
          </Col>
          <Col md={3} xs={6}>
            <h5>Legal</h5>
            <a href="#">Términos de Servicio</a>
            <a href="#">Política de Privacidad</a>
            <a href="#">Aviso de Cookies</a>
          </Col>
          <Col md={3} xs={6}>
            <h5>Sobre Nosotros</h5>
            <a href="#">Nuestra Misión</a>
            <a href="#">Contacto</a>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center text-muted">
            <small>&copy; {new Date().getFullYear()} SafeQR. Todos los derechos reservados.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}