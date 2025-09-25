import { useState } from 'react';
import axios from 'axios';
import styles from '../styles/App.module.css';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Footer } from '../components/Footer';
import { TrustSection } from '../components/TrustSection';
import { ThreatSection } from '../components/ThreatSection';
import { HowItWorksSection } from '../components/HowItWorksSection';
import { PricingSection } from '../components/PricingSection';
import { FAQSection } from '../components/FAQSection';
import { CtaSection } from '../components/CtaSection';
import { Header } from '../components/Header';
import { SignUpButton } from '@clerk/clerk-react';

// --- LÍNEA CORREGIDA ---
// Importación de imágenes desde la carpeta assets
import logo from '../assets/logofinaltransparente.png';
import phishingIcon from '../assets/Gemini_Generated_Image_oau3qvoau3qvoau3.jpg';
import malwareIcon from '../assets/Gemini_Generated_Image_8kvx5p8kvx5p8kvx.jpg';
import aiIcon from '../assets/Gemini_Generated_Image_stg5ehstg5ehstg5.jpg';

// Interfaz para el resultado del escaneo
interface ScanResult {
  isSafe: boolean;
  reason: string;
  analysisProvider?: string;
}

export default function App() {
  // Lógica de estado que usaremos en la app real
  const [url, setUrl] = useState('');
  const [result, setResult] = useState<ScanResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={styles.mainWrapper}>
      <Header />
      
      <video autoPlay loop muted className={styles.backgroundVideo}>
        <source src="/videos/Futuristic_Data_Stream_Video_Generation.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>
      
      <div className={styles.contentOverlay}>
        <main>
          {/* --- Sección Principal (Hero) --- */}
          <Container as="section" className="text-center" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Row className="justify-content-center">
              <Col md={8}>
                <img src={logo} alt="SafeQR Logo" className={styles.heroLogo} />
                <h1 className={styles.heroTitle}>La nueva era de la seguridad QR</h1>
                <p className={styles.heroSubtitle}>
                  Escanea cualquier código QR con confianza. Nuestra IA de triple capa te protege en tiempo real contra phishing, malware y todo tipo de amenazas.
                </p>
                <SignUpButton mode="modal">
                  <Button variant="primary" size="lg" className={styles.ctaButton}>Empezar a Escanear</Button>
                </SignUpButton>
              </Col>
            </Row>
          </Container>

          {/* --- Sección de Confianza y Estándares --- */}
          <TrustSection />

          {/* --- Sección del Problema (Phishing/Malware Stats) --- */}
          <ThreatSection />

          {/* --- Sección de Características --- */}
          <Container as="section" className="py-5">
            <h2 className="text-center mb-5" style={{color: 'white', fontWeight: 'bold'}}>Un Escudo Inteligente en tu Bolsillo</h2>
            <Row>
              <Col md={4} className="mb-4">
                <Card className={styles.featureCard}>
                  <Card.Img variant="top" src={phishingIcon} />
                  <Card.Body>
                    <Card.Title className={styles.cardTitleWhite}>Detección Avanzada de Phishing</Card.Title>
                    <Card.Text className={styles.cardTextWhite}>
                      Nuestra IA analiza el contenido visual y la estructura de los sitios para detectar intentos de suplantación que otros escáneres no ven.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card className={styles.featureCard}>
                  <Card.Img variant="top" src={malwareIcon} />
                  <Card.Body>
                    <Card.Title className={styles.cardTitleWhite}>Análisis Profundo de Malware</Card.Title>
                    <Card.Text className={styles.cardTextWhite}>
                      Integramos docenas de motores antivirus para verificar cada enlace en busca de malware, ransomware y otro software malicioso.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card className={styles.featureCard}>
                  <Card.Img variant="top" src={aiIcon} />
                  <Card.Body>
                    <Card.Title className={styles.cardTitleWhite}>Inteligencia Artificial Heurística</Card.Title>
                    <Card.Text className={styles.cardTextWhite}>
                      Gemini, nuestro motor de IA, actúa como un experto en ciberseguridad, identificando amenazas nuevas que no están en ninguna lista negra.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
          
          {/* --- Sección Cómo Funciona --- */}
          <HowItWorksSection />

          {/* --- Sección de Planes y Precios --- */}
          <PricingSection />

          {/* --- Sección de Preguntas Frecuentes (FAQ) --- */}
          <FAQSection />

          {/* --- Sección Final de Llamada a la Acción (CTA) --- */}
          <CtaSection />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

