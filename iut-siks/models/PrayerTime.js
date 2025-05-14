import mongoose from 'mongoose';

const PrayerTimeSchema = new mongoose.Schema({
    fajr: { type: String, required: true },
    dhuhr: { type: String, required: true },
    asr: { type: String, required: true },
    maghrib: { type: String, required: true },
    isha: { type: String, required: true },
    date: { type: Date, required: true },
});

export default mongoose.models.PrayerTime || mongoose.model('PrayerTime', PrayerTimeSchema);
