const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema(
    {
        customerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        partnerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        type: {
            type: String,
            enum: ['hot', 'warm', 'cold']
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Enquiry', enquirySchema);
