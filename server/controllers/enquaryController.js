const enquaryModel = require("../models/enquaryModel");
const userModel = require("../models/userModel");

const createEnquary = async (req, res) => {
    try {
        let enquaryData = req.body;

        let { partnerId, customerId } = enquaryData;

        const userExist = await userModel.findById({ $or: [{ partnerId }, { customerId }] });

        if (!userExist) {
            return res.status(400).send({ status: false, message: "Partner/Customer not found" });
        }

        const enquaryCreated = await enquaryModel.create(enquaryData);

        return res.status(201).send({ status: true, message: "Enquary created successfully", data: enquaryCreated });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ status: false, message: error.message });
    }
};

const getEnquary = async function (req, res) {
    try {
        let enquaryId = req.params.enquaryId

        let enquaryData = await enquaryModel.findById(enquaryId)

        if (!enquaryData) { return res.status(404).send({ status: false, message: "enquary is not found" }) }

        return res.status(200).send({ status: true, message: "enquary details", data: enquaryData })
    }
    catch (err) {
        return res.status(500).send({ status: false, error: err.message });
    }
}
const getAllEnquary = async function (req, res) {
    try {

        let enquaryData = await enquaryModel.find({})

        return res.status(200).send({ status: true, message: "All enquary details", data: enquaryData })
    }
    catch (err) {
        return res.status(500).send({ status: false, error: err.message });
    }
}

const deleteEnquary = async function (req, res) {
    try {
        let enquaryId = req.params.enquaryId

        let enquaryData = await enquaryModel.findByIdAndDelete(enquaryId)

        if (!enquaryData) { return res.status(404).send({ status: false, message: "enquary is not found" }) }

        return res.status(200).send({ status: true, message: "enquary Deleted", data: enquaryData })
    }
    catch (err) {
        return res.status(500).send({ status: false, error: err.message });
    }
}

const UpdateEnquary = async function (req, res) {
    try {
        const enquaryId = req.params.enquaryId

        const updatedenquary = await enquaryModel.findByIdAndUpdate({ _id: enquaryId },
            {
                // $set: { fname: fname, lname: lname, email: email, profileImage: profileImage, phone: phone, password: enquaryData.password, address: address },
                $set: req.body,
            }, { new: true });

        return res.status(200).send({ status: true, message: "enquary updated", data: updatedenquary })

    } catch (error) {
        return res.status(500).send({ status: false, data: error.message })
    }
}

module.exports = { createEnquary, getEnquary, getAllEnquary, deleteEnquary, UpdateEnquary }