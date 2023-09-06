const mongoose = require("mongoose");

const adminOfferSchema = new mongoose.Schema(
    {
        customerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        message: {
            type: String
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('AdminOffer', adminOfferSchema);
