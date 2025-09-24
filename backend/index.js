import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import scanRoutes from './src/routes/scanRoutes.js';

const app = express();
const port = 3001;

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Conectado a MongoDB.'))
  .catch((error) => console.error('❌ Error al conectar a la BD:', error));

app.use(express.json());
app.use('/api', scanRoutes);

app.listen(port, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${port}`);
});