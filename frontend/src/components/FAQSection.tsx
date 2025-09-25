import { Container, Row, Col, Accordion } from 'react-bootstrap';
import styles from '../styles/App.module.css';

export function FAQSection() {
  return (
    <section className={styles.faqSection}>
      <Container>
        <h2 className="text-center mb-5">Preguntas Frecuentes</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0" className={styles.faqItem}>
                <Accordion.Header>¿En qué se diferencia SafeQR de otros escáneres?</Accordion.Header>
                {/* --- CAMBIO AQUÍ --- */}
                <Accordion.Body className={styles.faqBodyText}>
                  La mayoría de los escáneres solo leen el enlace. SafeQR va mucho más allá: utiliza un motor de análisis de triple capa con IA para detectar amenazas nuevas y sofisticadas (phishing, malware) que otros simplemente no pueden ver, dándote un veredicto de seguridad real.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className={styles.faqItem}>
                <Accordion.Header>¿Mis datos están seguros con SafeQR?</Accordion.Header>
                {/* --- CAMBIO AQUÍ --- */}
                <Accordion.Body className={styles.faqBodyText}>
                  Absolutamente. La seguridad y la privacidad son nuestra máxima prioridad. No almacenamos el contenido de tus escaneos y toda la comunicación está encriptada. El análisis se realiza en nuestros servidores seguros, no en tu dispositivo.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className={styles.faqItem}>
                <Accordion.Header>¿Puedo cancelar mi plan Premium en cualquier momento?</Accordion.Header>
                {/* --- CAMBIO AQUÍ --- */}
                <Accordion.Body className={styles.faqBodyText}>
                  Sí. Puedes cancelar tu suscripción Premium en cualquier momento desde tu panel de usuario, sin preguntas ni complicaciones. Seguirás teniendo acceso a las funciones Premium hasta el final de tu ciclo de facturación.
                </Accordion.Body>
              </Accordion.Item>
               <Accordion.Item eventKey="3" className={styles.faqItem}>
                <Accordion.Header>¿Qué pasa si un sitio es marcado como peligroso?</Accordion.Header>
                {/* --- CAMBIO AQUÍ --- */}
                <Accordion.Body className={styles.faqBodyText}>
                  Si SafeQR detecta una amenaza, te lo mostraremos claramente con una alerta roja. El enlace al sitio peligroso estará deshabilitado para protegerte, pero te daremos toda la información que nuestro motor de análisis haya recopilado para que entiendas el riesgo.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
}