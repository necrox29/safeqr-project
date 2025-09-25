import { Container, Row, Col } from 'react-bootstrap';
import styles from '../styles/App.module.css';

export function HowItWorksSection() {
  return (
    <section className={styles.howItWorksSection}>
      <Container>
        <h2 className="text-center mb-5">Simple. Rápido. Seguro.</h2>
        <Row className="text-center">
          {/* --- Paso 1 --- */}
          <Col md={4} className={styles.stepBox}>
            <div className={styles.stepIconWrapper}>
              <i className={`bi bi-qr-code-scan ${styles.stepIcon}`}></i>
            </div>
            <h3 className={styles.stepTitle}>1. Escanea Cualquier QR</h3>
            <p className={styles.stepText}>
              Apunta tu cámara o sube una imagen. Nuestra app captura el destino del QR en un instante.
            </p>
          </Col>

          {/* --- Paso 2 --- */}
          <Col md={4} className={styles.stepBox}>
            <div className={styles.stepIconWrapper}>
              <i className={`bi bi-shield-check ${styles.stepIcon}`}></i>
            </div>
            <h3 className={styles.stepTitle}>2. Analizamos en la Nube</h3>
            <p className={styles.stepText}>
              La URL es procesada por nuestro motor de triple capa (VirusTotal, Google y Gemini) en tiempo real.
            </p>
          </Col>

          {/* --- Paso 3 --- */}
          <Col md={4} className={styles.stepBox}>
            <div className={styles.stepIconWrapper}>
              <i className={`bi bi-hand-thumbs-up-fill ${styles.stepIcon}`}></i>
            </div>
            <h3 className={styles.stepTitle}>3. Recibe el Veredicto</h3>
            <p className={styles.stepText}>
              Obtén una respuesta clara e inmediata: "Seguro" o "Peligroso". Navega con total tranquilidad.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}