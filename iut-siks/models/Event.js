import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    date: { type: Date, required: true },
    description: { type: String },
});

export default mongoose.models.Event || mongoose.model('Event', EventSchema);
