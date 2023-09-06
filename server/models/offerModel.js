const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema(
    {
        partnerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        offerImage: {
            type: String
        },
        offer: {
            type: String
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Offer', offerSchema);
