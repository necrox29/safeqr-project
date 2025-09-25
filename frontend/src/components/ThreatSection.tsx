import { Container, Row, Col } from 'react-bootstrap';
import styles from '../styles/App.module.css';

export function ThreatSection() {
  return (
    <section className={styles.threatSection}>
      <Container>
        <Row className="align-items-center justify-content-center text-center">
          <Col md={8}>
            <h2 className={styles.threatTitle}>
              El eslabón más débil está a un solo clic de distancia.
            </h2>
            <p className={styles.threatText}>
              Los ataques de phishing y malware a través de códigos QR son cada vez más sofisticados. Un escaneo con una aplicación no segura puede exponer tus datos personales, credenciales bancarias e información corporativa en segundos.
            </p>
            <div className={styles.statContainer}>
              <div className={styles.threatStat}>91%</div>
              <div className={styles.statLabel}>de todos los ciberataques comienzan con un email o enlace de phishing.</div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}