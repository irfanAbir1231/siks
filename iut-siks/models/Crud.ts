import mongoose, { Document, Model } from 'mongoose';

export interface ICrud extends Document {
    name: string;
    email: string;
}

const CrudSchema = new mongoose.Schema<ICrud>({
    name: { type: String, required: true },
    email: { type: String, required: true },
});

const Crud: Model<ICrud> = mongoose.models.Crud || mongoose.model<ICrud>('Crud', CrudSchema);
export default Crud;
