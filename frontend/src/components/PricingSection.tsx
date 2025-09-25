import { useState } from 'react';
import { Container, Row, Col, Card, Button, ListGroup, Form } from 'react-bootstrap';
import { SignUpButton } from '@clerk/clerk-react';
import styles from '../styles/App.module.css';

// 1. Importamos la nueva imagen de la oferta
import offerStamp from '../assets/oferta.jpg';

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const monthlyPrice = 2990;
  const annualPrice = 19990;
  const monthlyEquivalent = 1690; 

  return (
    <section className={styles.pricingSection}>
      <Container>
        <h2 className="text-center">Planes para Cada Necesidad</h2>

        <div className={styles.billingToggleContainer}>
          <span className={billingCycle === 'monthly' ? styles.active : ''}>Mensual</span>
          <Form.Check
            type="switch"
            id="billing-switch"
            className={styles.billingSwitch}
            checked={billingCycle === 'annual'}
            onChange={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
          />
          <span className={billingCycle === 'annual' ? styles.active : ''}>
            Anual <span className={styles.savingsBadge}>¡Mega Oferta!</span>
          </span>
        </div>

        <Row className="justify-content-center align-items-center mt-5">
          {/* --- Plan Gratuito --- */}
          <Col lg={4} md={6} className="mb-4">
            <Card className={styles.pricingCard}>
              <Card.Body>
                <h3 className={styles.planTitle}>Free</h3>
                <p className={styles.planPrice}>$0 <span className={styles.pricePeriod}>/ por siempre</span></p>
                <p className={styles.planDescription}>Para usuarios casuales que necesitan una verificación rápida.</p>
                <ListGroup variant="flush" className={styles.featureList}>
                  <ListGroup.Item><i className="bi bi-check-circle-fill text-success"></i> Escaneo de QR (solo muestra link)</ListGroup.Item>
                  <ListGroup.Item><i className="bi bi-check-circle-fill text-success"></i> 1 Escaneo con IA/Cámara por semana</ListGroup.Item>
                  <ListGroup.Item><i className="bi bi-check-circle-fill text-success"></i> 1 Escaneo con IA/Imagen por semana</ListGroup.Item>
                  <ListGroup.Item className={styles.featureDisabled}><i className="bi bi-x-circle-fill"></i> Historial de Escaneos</ListGroup.Item>
                  <ListGroup.Item className={styles.featureDisabled}><i className="bi bi-x-circle-fill"></i> Soporte Prioritario</ListGroup.Item>
                </ListGroup>
                <SignUpButton mode="modal">
                  <Button variant="outline-primary" className="w-100 mt-4">Empezar Gratis</Button>
                </SignUpButton>
              </Card.Body>
            </Card>
          </Col>

          {/* --- Plan Premium --- */}
          <Col lg={4} md={6} className="mb-4">
            <div className={styles.premiumCardWrapper}>
              
              {billingCycle === 'annual' && (
                <>
                  <div className={styles.popularBadge}>Más Popular</div>
                  {/* 2. Mostramos la imagen de la estampilla */}
                  <img src={offerStamp} alt="Oferta Anual" className={styles.discountStampImage} />
                </>
              )}

              <Card className={`${styles.pricingCard} ${styles.premiumCard}`}>
                <Card.Body>
                  <h3 className={styles.planTitle}>Premium</h3>
                  {billingCycle === 'monthly' ? (
                    <p className={styles.planPrice}>${monthlyPrice.toLocaleString('es-CL')} <span className={styles.pricePeriod}>/ mes</span></p>
                  ) : (
                    <p className={styles.planPrice}>${monthlyEquivalent.toLocaleString('es-CL')} <span className={styles.pricePeriod}>/ mes</span></p>
                  )}
                  <p className={styles.planDescription}>
                    {billingCycle === 'annual' 
                      ? `Facturado como un solo pago de $${annualPrice.toLocaleString('es-CL')} por año.` 
                      : 'La suite de seguridad completa para una protección total.'
                    }
                  </p>
                  <ListGroup variant="flush" className={styles.featureList}>
                      <ListGroup.Item><i className="bi bi-check-circle-fill text-success"></i> Escaneos con IA ilimitados</ListGroup.Item>
                      <ListGroup.Item><i className="bi bi-check-circle-fill text-success"></i> Escaneo de Imágenes QR ilimitado</ListGroup.Item>
                      <ListGroup.Item><i className="bi bi-check-circle-fill text-success"></i> Historial de Escaneos Completo</ListGroup.Item>
                      <ListGroup.Item><i className="bi bi-check-circle-fill text-success"></i> Escaneo de Documentos (Próximamente)</ListGroup.Item>
                      <ListGroup.Item><i className="bi bi-check-circle-fill text-success"></i> Soporte Prioritario</ListGroup.Item>
                  </ListGroup>
                   <SignUpButton mode="modal">
                    <Button variant="primary" className="w-100 mt-4">Actualizar a Premium</Button>
                  </SignUpButton>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}