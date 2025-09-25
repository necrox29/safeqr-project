import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Permite que Vite sea accesible desde fuera del 'localhost' del servidor
    hmr: {
      clientPort: 5173, // Le dice al cliente que se conecte siempre al puerto 5173 para las actualizaciones
    },
  },
})