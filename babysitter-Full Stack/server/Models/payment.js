import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  studentId: { type: String, required: true },
  items: { type: Array, required: true },
  totalAmount: { type: Number, required: true },
  customerName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  paymentMethod: { type: String, required: true },
});

const paymentModel = mongoose.model('Payment', paymentSchema);

export default paymentModel;
