const mongoose = require("mongoose");

const bannerSchema = new mongoose.Schema(
    {
        partnerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        },
        bannerImage: {
            type: String
        },
        validity: {
            type: Number
        },
        price: {
            type: Number
        },
        transactionId: {
            type: String
        },
        isApproved: {
            type: Boolean
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Banner', bannerSchema);
