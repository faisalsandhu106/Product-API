// require('dotenv').config();
// const mongoose = require('mongoose');

// mongoose.connect(process.env.Mongoo_URL)
//     .then(() => {
//         console.log('Connected to MongoDB successfully');
//     })
//     .catch((err) => {
//         console.error('Error connecting to MongoDB:', err);
//     })

const mongoose = require('mongoose');

// url = 'mongodb+srv://faisalsandhu266_db_user:faisal123@product-api.7jigbss.mongodb.net/'

const connectDB = (url) => {
    console.log('Connected DB')
    return mongoose.connect(url);
};

module.exports = connectDB