import mongoose, { Document, Model } from 'mongoose';

export interface IDailyReminder extends Document {
    title: string;
    description?: string;
    date: Date;
    icon?: string;
}

const DailyReminderSchema = new mongoose.Schema<IDailyReminder>({
    title: { type: String, required: true },
    description: { type: String },
    date: { type: Date, required: true },
    icon: {
        type: String,
        validate: {
            validator: function (v: string) {
                return /\.(jpg|jpeg|png|gif|bmp|svg|webp)$/i.test(v);
            },
            message: (props: any) => `${props.value} is not a valid image file type!`
        }
    }
});

const DailyReminder: Model<IDailyReminder> = mongoose.models.DailyReminder || mongoose.model<IDailyReminder>('DailyReminder', DailyReminderSchema);
export default DailyReminder;
