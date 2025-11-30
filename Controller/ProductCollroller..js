const Model = require('../Models/ProductSchema')

const getProduct = async (req, res) => {

    const { name, company, feature } = req.query;
    const queryObject = {};

    if(name) {
        queryObject.name = { $regex: name, $options: "i" }
    };

    if(company) {
        queryObject.company = { $regex: company, $options: "i" }
    };

    if(feature) {
        queryObject.feature = feature
    };

    const myData = await Model.find(queryObject)
    res.status(200).json({ myData });
};

module.exports = getProduct