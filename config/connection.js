const mongoose = require('mongoose');

// Connection URL
const url = 'mongodb://localhost:27017/social-network';

// Connect to the database
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to the database successfully');
    })
    .catch((err) => {
        console.error('Error connecting to the database:', err);
    });
