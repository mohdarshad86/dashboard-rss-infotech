const mongoose = require("mongoose");

const adminOfferSchema = new mongoose.Schema(
    {
        partnerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        offerImage: {
            type: String
        },
        isApproved: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('AdminOffer', adminOfferSchema);
