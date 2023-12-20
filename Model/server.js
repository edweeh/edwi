const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000; // Use the same port as in your React program

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/yourdbname', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a MongoDB schema and model for your data
const userSchema = new mongoose.Schema({
  firstName: String,
  phone: String,
  email: String,
  username: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// Routes
app.post('/dnew', (req, res) => {
  const userData = req.body;
  const user = new User(userData);

  user.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving user');
    } else {
      res.status(200).send('User saved');
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
