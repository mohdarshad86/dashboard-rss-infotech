const mongoose = require("mongoose");

const bannerByCompaniesSchema = new mongoose.Schema(
    {
        partnerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        },
        validity: {
            type: Number
        },
        price: {
            type: Number
        },
        transactionId: {
            type: String,
            default: ""
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('BannerByCompanies', bannerByCompaniesSchema);
