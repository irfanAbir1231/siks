import mongoose, { Document, Model } from 'mongoose';

export interface IPrayerTime extends Document {
    Fajr: string;
    Dhuhr: string;
    Asr: string;
    Maghrib: string;
    Isha: string;
}

const PrayerTimeSchema = new mongoose.Schema<IPrayerTime>({
    Fajr: { type: String, required: true },
    Dhuhr: { type: String, required: true },
    Asr: { type: String, required: true },
    Maghrib: { type: String, required: true },
    Isha: { type: String, required: true },
});

const PrayerTime: Model<IPrayerTime> = mongoose.models.PrayerTime || mongoose.model<IPrayerTime>('PrayerTime', PrayerTimeSchema);
export default PrayerTime;
