import mongoose, { Document, Model } from "mongoose";

export interface IBlog extends Document {
  author: string;
  title: string;
  date: Date;
  description?: string;
  content: string;
  slug: string;
  status: "pending" | "approved" | "rejected";
  excerpt: string;
}

const BlogSchema = new mongoose.Schema<IBlog>({
  author: { type: String, required: true },
  title: { type: String, required: true },
  date: { type: Date, required: true, default: Date.now },
  description: { type: String },
  content: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
  excerpt: { type: String, required: true },
});

// Add middleware to generate slug from title if not provided
BlogSchema.pre("save", function (next) {
  if (!this.slug && this.title) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .trim();
  }
  if (!this.excerpt && this.content) {
    this.excerpt = this.content.slice(0, 150) + "...";
  }
  next();
});

const Blog: Model<IBlog> =
  mongoose.models.Blog || mongoose.model<IBlog>("Blog", BlogSchema);
export default Blog;
