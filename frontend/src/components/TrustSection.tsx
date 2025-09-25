import { Container, Row, Col } from 'react-bootstrap';
import styles from '../styles/App.module.css';

// --- NOMBRES DE ARCHIVO SIMPLIFICADOS ---
import cobitLogo from '../assets/cobit.png';
import itilLogo from '../assets/itil.webp';
import cisControlsLogo from '../assets/cis.png';
import nistLogo from '../assets/nist.webp';

export function TrustSection() {
  return (
    <section className={styles.trustSection}>
      <Container>
        <Row className="justify-content-center">
          <Col md={10} className="text-center">
            <h4 className={styles.trustTitle}>
              Construido con las Mejores Prácticas de la Industria
            </h4>
            <div className={styles.logosContainer}>
              <img src={cobitLogo} alt="COBIT 5 Foundation" title="COBIT 5 Framework" />
              <img src={itilLogo} alt="ITIL 4 Foundation" title="ITIL 4 Framework" />
              <img src={cisControlsLogo} alt="CIS Controls" title="CIS Controls" />
              <img src={nistLogo} alt="NIST CSF" title="NIST Cybersecurity Framework" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}