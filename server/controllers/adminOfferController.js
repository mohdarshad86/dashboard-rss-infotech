const AdminOfferModel = require("../models/adminOfferModel");
const userModel = require("../models/userModel");

const createAdminOffer = async (req, res) => {
    try {
        let AdminOfferData = req.body;

        let { partnerId } = AdminOfferData;

        const userExist = await userModel.findById({ partnerId: partnerId });

        if (!userExist) {
            return res.status(400).send({ status: false, message: "Partner/Customer not found" });
        }

        const AdminOfferCreated = await AdminOfferModel.create(AdminOfferData);

        return res.status(201).send({ status: true, message: "AdminOffer created successfully", data: AdminOfferCreated });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ status: false, message: error.message });
    }
};

const getAdminOffer = async function (req, res) {
    try {
        let AdminOfferId = req.params.AdminOfferId

        let AdminOfferData = await AdminOfferModel.findById(AdminOfferId)

        if (!AdminOfferData) { return res.status(404).send({ status: false, message: "AdminOffer is not found" }) }

        return res.status(200).send({ status: true, message: "AdminOffer details", data: AdminOfferData })
    }
    catch (err) {
        return res.status(500).send({ status: false, error: err.message });
    }
}
const getAllAdminOffer = async function (req, res) {
    try {

        let AdminOfferData = await AdminOfferModel.find({})

        return res.status(200).send({ status: true, message: "All AdminOffer details", data: AdminOfferData })
    }
    catch (err) {
        return res.status(500).send({ status: false, error: err.message });
    }
}

const deleteAdminOffer = async function (req, res) {
    try {
        let AdminOfferId = req.params.AdminOfferId

        let AdminOfferData = await AdminOfferModel.findByIdAndDelete(AdminOfferId)

        if (!AdminOfferData) { return res.status(404).send({ status: false, message: "AdminOffer is not found" }) }

        return res.status(200).send({ status: true, message: "AdminOffer Deleted", data: AdminOfferData })
    }
    catch (err) {
        return res.status(500).send({ status: false, error: err.message });
    }
}

const UpdateAdminOffer = async function (req, res) {
    try {
        const AdminOfferId = req.params.AdminOfferId

        const updatedAdminOffer = await AdminOfferModel.findByIdAndUpdate({ _id: AdminOfferId },
            {
                // $set: { fname: fname, lname: lname, email: email, profileImage: profileImage, phone: phone, password: AdminOfferData.password, address: address },
                $set: req.body,
            }, { new: true });

        return res.status(200).send({ status: true, message: "AdminOffer updated", data: updatedAdminOffer })

    } catch (error) {
        return res.status(500).send({ status: false, data: error.message })
    }
}

module.exports = { createAdminOffer, getAdminOffer, getAllAdminOffer, deleteAdminOffer, UpdateAdminOffer }