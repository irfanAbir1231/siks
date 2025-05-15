import mongoose, { Document, Model } from 'mongoose';

export interface IBlog extends Document {
    author: string;
    title: string;
    date: Date;
    description?: string;
}

const BlogSchema = new mongoose.Schema<IBlog>({
    author: { type: String, required: true },
    title: { type: String, required: true },
    date: { type: Date, required: true },
    description: { type: String },
});

const Blog: Model<IBlog> = mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema);
export default Blog;
