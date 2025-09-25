import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import styles from '../styles/App.module.css';

export function Header() {
  return (
    <Navbar fixed="top" expand="lg" className={styles.headerNav}>
      <Container>
        {/* --- CÓDIGO SIMPLIFICADO: SOLO TEXTO --- */}
        <Navbar.Brand href="#home" className={styles.headerBrand}>
          SafeQR
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="align-items-center">
            <SignedOut>
              <SignUpButton mode="modal">
                <Button variant="outline-light" className="me-2">Registrarse</Button>
              </SignUpButton>
              <SignInButton mode="modal">
                <Button variant="primary" className={styles.headerButton}>Iniciar Sesión</Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}