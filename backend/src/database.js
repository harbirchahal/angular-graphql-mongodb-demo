import mongoose from 'mongoose';

const URL = 'mongodb://localhost';
const DB = 'community';

mongoose.connect(`${URL}/${DB}`);

const connection = mongoose.connection;

connection.once('open', () => {
  console.log(`Connected to ${URL}`);
});

export default connection;