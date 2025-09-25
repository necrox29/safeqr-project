import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-react";
import { LandingPage } from './pages/LandingPage';
import { DashboardPage } from './pages/DashboardPage';

// Importamos la clave publicable desde las variables de entorno
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key from .env. Did you create the file?");
}

function ClerkProviderWithRoutes() {
  const navigate = useNavigate();

  return (
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      navigate={(to) => navigate(to)}
    >
      <Routes>
        {/* Ruta para la página de inicio, visible para todos */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Ruta para el dashboard, protegida por Clerk.
            - Si el usuario ha iniciado sesión (SignedIn), se muestra DashboardPage.
            - Si no (SignedOut), se muestra LandingPage para que no vea contenido protegido.
        */}
        <Route
          path="/app"
          element={
            <>
              <SignedIn>
                <DashboardPage />
              </SignedIn>
              <SignedOut>
                 <LandingPage />
              </SignedOut>
            </>
          }
        />
      </Routes>
    </ClerkProvider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ClerkProviderWithRoutes />
    </BrowserRouter>
  );
}

export default App;
