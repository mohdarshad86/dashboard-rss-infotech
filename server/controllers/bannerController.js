const bannerModel = require("../models/bannerModel");
const userModel = require("../models/userModel");

const createBanner = async (req, res) => {
    try {
        let BannerData = req.body;

        let { partnerId } = BannerData;

        const userExist = await userModel.findById({ _id: partnerId });

        if (!userExist) {
            return res.status(400).send({ status: false, message: "Partner not found" });
        }

        const BannerCreated = await bannerModel.create(BannerData);

        return res.status(201).send({ status: true, message: "Banner created successfully", data: BannerCreated });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ status: false, message: error.message });
    }
};

const getBanner = async function (req, res) {
    try {
        let BannerId = req.params.BannerId

        let userData = await bannerModel.findById(BannerId)

        if (!userData) { return res.status(404).send({ status: false, message: "Banner Company is not found" }) }

        return res.status(200).send({ status: true, message: "Banner Company details", data: userData })
    }
    catch (err) {
        return res.status(500).send({ status: false, error: err.message });
    }
}
const getAllBanner = async function (req, res) {
    try {

        let BannerData = await bannerModel.find({})

        return res.status(200).send({ status: true, message: "All User details", data: BannerData })
    }
    catch (err) {
        return res.status(500).send({ status: false, error: err.message });
    }
}

const deleteBanner = async function (req, res) {
    try {
        let BannerId = req.params.BannerId

        let bannerData = await bannerModel.findByIdAndDelete(BannerId)

        if (!bannerData) { return res.status(404).send({ status: false, message: "Banner is not found" }) }

        return res.status(200).send({ status: true, message: "Banner Deleted", data: bannerData })
    }
    catch (err) {
        return res.status(500).send({ status: false, error: err.message });
    }
}

const UpdateBanner = async function (req, res) {
    try {
        const BannerId = req.params.BannerId

        const updatedBanner = await bannerModel.findByIdAndUpdate({ _id: BannerId },
            {
                // $set: { fname: fname, lname: lname, email: email, profileImage: profileImage, phone: phone, password: BannerData.password, address: address },
                $set: req.body,
            }, { new: true });

        return res.status(200).send({ status: true, message: "Banner updated", data: updatedBanner })

    } catch (error) {
        return res.status(500).send({ status: false, data: error.message })
    }
}

module.exports = { createBanner, getBanner, getAllBanner, deleteBanner, UpdateBanner }