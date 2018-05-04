import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  movieID: String,
  name: String,
  year: Number,
  country: String,
  genre: String,
  runtime: String,
  link: String,
  rating: Number,
  },
});

export default mongoose.model('Movie', MovieSchema);