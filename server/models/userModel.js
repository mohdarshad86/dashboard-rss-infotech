const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        mobile: {
            type: String
        },
        address: {
            type: String
        },
        email: {
            type: String
        },
        landline: {
            type: String
        },
        landmark: {
            type: String
        },
        latitude: {
            type: Number
        },
        longitude: {
            type: Number
        },
        name: {
            type: String
        },
        pincode: {
            type: String
        },
        profileLogo: {
            type: String,
            default: "https://i.pinimg.com/1200x/66/ff/cb/66ffcb56482c64bdf6b6010687938835.jpg"
        },
        services: {
            type: String
        },
        shopLogo: {
            type: String,
            default: "https://i.pinimg.com/1200x/66/ff/cb/66ffcb56482c64bdf6b6010687938835.jpg"
        },
        shopName: {
            type: String
        },
        shopType: {
            type: String
        },
        state: {
            type: String
        },
        type: {
            type: String,
            // enum: ['partner', 'customer']
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
