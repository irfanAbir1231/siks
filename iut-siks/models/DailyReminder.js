import mongoose from 'mongoose';

const DailyReminderSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    date: { type: Date, required: true },
    icon: { 
        type: String, 
        validate: {
            validator: function(v) {
                return /\.(jpg|jpeg|png|gif|bmp|svg|webp)$/i.test(v);
            },
            message: props => `${props.value} is not a valid image file type!`
        }
    }
});

export default mongoose.models.DailyReminder || mongoose.model('DailyReminder', DailyReminderSchema);
