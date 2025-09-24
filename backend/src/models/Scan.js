import mongoose from 'mongoose';

const scanSchema = new mongoose.Schema({
  originalUrl: { type: String, required: true },
  isSafe: { type: Boolean, default: true },
  analysisProvider: { type: String },
  reason: { type: String },
  userId: { type: String, required: true },
}, {
  timestamps: true
});

const Scan = mongoose.model('Scan', scanSchema);

export default Scan;