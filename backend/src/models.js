import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const personSchema = new Schema({
  id: Int,
  firstname: String,
  lastname: String,
  email: String,
  isActive: Boolean
});

const personModel = mongoose.model('people', personSchema);

export default personModel;