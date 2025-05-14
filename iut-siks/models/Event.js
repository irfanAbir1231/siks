<<<<<<< Updated upstream
import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);
export default Event;
=======
import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    date: { type: Date, required: true },
    description: { type: String },
});

export default mongoose.models.Event || mongoose.model('Event', EventSchema);
>>>>>>> Stashed changes
