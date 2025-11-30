const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const Product_Route = require('./Routes/ProductRouts')
const ConnectDB = require('./Models/db')
require('./Models/db')
require('dotenv').config();


app.get('/', (req, res) => {
    res.send('Hello, World!')
});

//Middleware or set Route 
app.use(cors());
app.use("/user/products", Product_Route);

const start = async () => {
    try {
        await ConnectDB(process.env.Mongoo_URL);
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        })
    } catch (error) {
        console.log('Your Server is not Running', error)
    }
}

start();