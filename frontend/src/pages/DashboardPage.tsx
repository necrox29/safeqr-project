    import { UserProfile } from "@clerk/clerk-react";
    import { Header } from "../components/Header"; // Reutilizamos el header
    import { Container } from "react-bootstrap";
    import styles from '../styles/App.module.css';

    export function DashboardPage() {
      return (
        <div className={styles.mainWrapper}>
          <Header />
          <Container style={{ paddingTop: '100px', color: 'white' }}>
            <h1>Bienvenido a tu Dashboard de SafeQR</h1>
            <p className="lead">Esta es tu área segura. Próximamente aquí podrás escanear códigos QR y ver tu historial.</p>
            
            <hr className="my-4" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />

            <h2>Gestiona tu Perfil</h2>
            <p>Puedes cambiar tu contraseña, email y otros datos de tu cuenta aquí.</p>
            <div className="d-flex justify-content-center">
              <UserProfile />
            </div>
          </Container>
        </div>
      );
    }
    
