const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const reviewSchema = new Schema({
  movie_id: Number,
  user_id: { type: Schema.Types.ObjectId, ref: "User" },
  is_movie: Boolean,
  grade: Number,
  review: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
