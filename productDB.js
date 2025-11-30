require('dotenv').config();
const connectDB = require('./Models/db');
const model = require('./Models/ProductSchema');
const ProductJSON = require('./Products.json')

const start = async () => {
    try {
        await connectDB(process.env.Mongoo_URL);              
        await model.deleteMany();  
        await model.create(ProductJSON);
        console.log('Data imported successfully');
    } catch (error) {
        console.log('Error importing data:', error);
    }       
};

start();