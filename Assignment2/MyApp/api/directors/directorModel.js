import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const DirectorSchema = new Schema({
  directorID: String,
  name: String,
  born: String,
  link: String,
  },
);

export default mongoose.model('Director', DirectorSchema);