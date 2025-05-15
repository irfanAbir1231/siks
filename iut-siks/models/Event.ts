import mongoose, { Document, Model } from 'mongoose';

export interface IEvent extends Document {
    title: string;
    date: Date;
    description?: string;
}

const EventSchema = new mongoose.Schema<IEvent>({
    title: { type: String, required: true },
    date: { type: Date, required: true },
    description: { type: String },
});

const Event: Model<IEvent> = mongoose.models.Event || mongoose.model<IEvent>('Event', EventSchema);
export default Event;
