import mongoose from 'mongoose';

const PrayerTimeSchema = new mongoose.Schema({
    Fajr: { type: String, required: true },
    Dhuhr: { type: String, required: true },
    Asr: { type: String, required: true },
    Maghrib: { type: String, required: true },
    Isha: { type: String, required: true },
});

export default mongoose.models.PrayerTime || mongoose.model('PrayerTime', PrayerTimeSchema);
