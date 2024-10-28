import { model, Schema } from "mongoose";
import { TMovie, TReview } from "./movies.interface";
import { format } from "date-fns";
import slugify from "slugify";

const reviewSchema = new Schema<TReview>({
  email: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

const MovieSchema = new Schema<TMovie>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  releaseDate: { type: Date },
  genre: { type: String, required: true },
  isDeleted: { type: Boolean, default: false },
  viewCount: { type: Number, default: 0 },
  reviews: { type: [reviewSchema] },
  slug: { type: String },
});

MovieSchema.pre("save", async function (next) {
  const date = format(this.releaseDate, "dd-MM-yyyy");
  this.slug = slugify(`${this.title}-${date}`, {
    lower: true,
  });
  next();
});

export const Movie = model<TMovie>("Movie", MovieSchema);
