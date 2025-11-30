const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: { 
        type: String,
        required: true,
    },
    price: { 
        type: Number,
        required: true, 
    },
    feature: {
        type: Boolean,
        default: false,
    },
    description: { 
        type: String,
        required: false,
    },
    company: {
        type: String,
        enum: {
            values: ['Apple', 'Samsung', 'Microsoft', 'Lenovo'],
            message: '{VALUE} is not Available',
        },
    },
    rating: {
        type: Number,
        default: 4.5,
    },
    createAt: { 
        type: Date,
        default: Date.now(),
    },
})

const productSchema = mongoose.model('Product', ProductSchema);
module.exports = productSchema;
