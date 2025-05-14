import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
    author: { type: String, required: true },
    title: { type: String, required: true },
    date: { type: Date, required: true },
    description: { type: String },
});

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema);
