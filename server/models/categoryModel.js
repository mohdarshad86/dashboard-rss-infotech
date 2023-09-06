const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
    {
        title: {
            type: String
        },
        subTitle: {
            type: String
        },
        image: {
            type: String
        },
        minPrice: {
            type: Number
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Categories', categorySchema);