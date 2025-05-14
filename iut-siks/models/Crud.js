import mongoose from 'mongoose';

const CrudSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
});

export default mongoose.models.Crud || mongoose.model('Crud', CrudSchema);
