const offerModel = require("../models/offerModel");
const userModel = require("../models/userModel");

const createOffer = async (req, res) => {
    try {
        let offerData = req.body;

        let { partnerId } = offerData;

        const userExist = await userModel.findById({ _id: partnerId });

        if (!userExist) {
            return res.status(400).send({ status: false, message: "Partner/Customer not found" });
        }

        const offerCreated = await offerModel.create(offerData);

        return res.status(201).send({ status: true, message: "offer created successfully", data: offerCreated });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ status: false, message: error.message });
    }
};

const getOffer = async function (req, res) {
    try {
        let offerId = req.params.offerId

        let offerData = await offerModel.findById(offerId)

        if (!offerData) { return res.status(404).send({ status: false, message: "offer is not found" }) }

        return res.status(200).send({ status: true, message: "offer details", data: offerData })
    }
    catch (err) {
        return res.status(500).send({ status: false, error: err.message });
    }
}
const getAllOffer = async function (req, res) {
    try {

        let offerData = await offerModel.find({})

        return res.status(200).send({ status: true, message: "All offer details", data: offerData })
    }
    catch (err) {
        return res.status(500).send({ status: false, error: err.message });
    }
}

const deleteOffer = async function (req, res) {
    try {
        let offerId = req.params.offerId

        let offerData = await offerModel.findByIdAndDelete(offerId)

        if (!offerData) { return res.status(404).send({ status: false, message: "offer is not found" }) }

        return res.status(200).send({ status: true, message: "offer Deleted", data: offerData })
    }
    catch (err) {
        return res.status(500).send({ status: false, error: err.message });
    }
}

const UpdateOffer = async function (req, res) {
    try {
        const offerId = req.params.offerId

        const updatedoffer = await offerModel.findByIdAndUpdate({ _id: offerId },
            {
                // $set: { fname: fname, lname: lname, email: email, profileImage: profileImage, phone: phone, password: offerData.password, address: address },
                $set: req.body,
            }, { new: true });

        return res.status(200).send({ status: true, message: "offer updated", data: updatedoffer })

    } catch (error) {
        return res.status(500).send({ status: false, data: error.message })
    }
}

module.exports = { createOffer, getOffer, getAllOffer, deleteOffer, UpdateOffer }