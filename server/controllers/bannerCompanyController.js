const bannerByCompanyModel = require("../models/bannerByCompanyModel");
const userModel = require("../models/userModel");

const createBannerCompany = async (req, res) => {
    try {
        let BannerData = req.body;

        let { partnerId } = BannerData;

        const userExist = await userModel.findById({ partnerId: partnerId });

        if (!userExist) {
            return res.status(400).send({ status: false, message: "Partner not found" });
        }

        const BannerCreated = await bannerByCompanyModel.create(BannerData);

        return res.status(201).send({ status: true, message: "BannerCompnay created successfully", data: BannerCreated });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ status: false, message: error.message });
    }
};

const getBannerCompany = async function (req, res) {
    try {
        let BannerId = req.params.BannerId

        let BannerData = await bannerByCompanyModel.findById(BannerId)

        if (!BannerData) { return res.status(404).send({ status: false, message: "Banner Company is not found" }) }

        return res.status(200).send({ status: true, message: "Banner Company details", data: BannerData })
    }
    catch (err) {
        return res.status(500).send({ status: false, error: err.message });
    }
}
const getAllBannerCompany = async function (req, res) {
    try {

        let BannerData = await bannerByCompanyModel.find({})

        return res.status(200).send({ status: true, message: "All Banner Compnay details", data: BannerData })
    }
    catch (err) {
        return res.status(500).send({ status: false, error: err.message });
    }
}

const deleteBannerCompany = async function (req, res) {
    try {
        let BannerId = req.params.BannerId

        let bannerData = await bannerByCompanyModel.findByIdAndDelete(BannerId)

        if (!bannerData) { return res.status(404).send({ status: false, message: "Banner Compnay is not found" }) }

        return res.status(200).send({ status: true, message: "Banner Compnay Deleted", data: bannerData })
    }
    catch (err) {
        return res.status(500).send({ status: false, error: err.message });
    }
}

const UpdateBannerCompany = async function (req, res) {
    try {
        const BannerId = req.params.BannerId

        const updatedBanner = await bannerByCompanyModel.findByIdAndUpdate({ _id: BannerId },
            {
                // $set: { fname: fname, lname: lname, email: email, profileImage: profileImage, phone: phone, password: BannerData.password, address: address },
                $set: req.body,
            }, { new: true });

        return res.status(200).send({ status: true, message: "Banner Compnay updated", data: updatedBanner })

    } catch (error) {
        return res.status(500).send({ status: false, data: error.message })
    }
}

module.exports = { createBannerCompany, getBannerCompany, getAllBannerCompany, deleteBannerCompany, UpdateBannerCompany }