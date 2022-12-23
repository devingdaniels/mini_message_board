// Import dependencies.
const mongoose = require('mongoose');
// const dotenv = require('dotenv').config();

const connectDB = () => {
// Connect based on the .env file parameters.
  mongoose.connect(
    'mongodb+srv://Devin:12345@messageboard.6boskoc.mongodb.net/test',
    { useNewUrlParser: true },
  );

  const db = mongoose.connection;

  // Confirm that the database has connected and print a message in the console.
  db.once('open', (err) => {
    if (err) {
      res.status(500).json({ error: '500:Connection to the server failed.' });
    } else {
      console.log('Successfully connected to MongoDB!');
    }
  });
};

module.exports = {
  connectDB,
};
