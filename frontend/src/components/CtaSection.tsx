import { Container, Row, Col, Button } from 'react-bootstrap';
import { SignUpButton } from '@clerk/clerk-react';
import styles from '../styles/App.module.css';

export function CtaSection() {
  return (
    <section className={styles.ctaSection}>
      <Container className="text-center">
        <Row className="justify-content-center">
          <Col md={8}>
            <h2 className={styles.ctaTitle}>¿Listo para escanear con total seguridad?</h2>
            <p className={styles.ctaText}>
              Únete a miles de usuarios que ya no se preocupan por los QR maliciosos. Crea tu cuenta y obtén tu primera capa de protección hoy mismo.
            </p>
            <SignUpButton mode="modal">
              <Button variant="primary" size="lg" className={styles.ctaButton}>
                Protegerse Ahora
              </Button>
            </SignUpButton>
          </Col>
        </Row>
      </Container>
    </section>
  );
}