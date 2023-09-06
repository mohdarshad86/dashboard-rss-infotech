const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        address: {
            type: String
        },
        landmark: {
            type: String
        },
        pincode: {
            type: String
        },
        state: {
            type: String
        },
        type: {
            type: String,
            enum: ["Home", "Work", "Other"],
            default: "Other"
        },
        latitude: {
            type: Number
        },
        longitude: {
            type: Number
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Address', addressSchema);
