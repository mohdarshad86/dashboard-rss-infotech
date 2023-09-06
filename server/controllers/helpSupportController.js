const helpSupportModel = require("../models/helpSupportModel");
const userModel = require("../models/userModel");

const createhelpSupport = async (req, res) => {
    try {
        let helpSupportData = req.body;

        let { customerId } = helpSupportData;

        const userExist = await userModel.findById({ customerId: customerId });

        if (!userExist) {
            return res.status(400).send({ status: false, message: "Partner/Customer not found" });
        }

        const helpSupportCreated = await helpSupportModel.create(helpSupportData);

        return res.status(201).send({ status: true, message: "helpSupport created successfully", data: helpSupportCreated });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ status: false, message: error.message });
    }
};

const gethelpSupport = async function (req, res) {
    try {
        let helpSupportId = req.params.helpSupportId

        let helpSupportData = await helpSupportModel.findById(helpSupportId)

        if (!helpSupportData) { return res.status(404).send({ status: false, message: "helpSupport is not found" }) }

        return res.status(200).send({ status: true, message: "helpSupport details", data: helpSupportData })
    }
    catch (err) {
        return res.status(500).send({ status: false, error: err.message });
    }
}
const getAllhelpSupport = async function (req, res) {
    try {

        let helpSupportData = await helpSupportModel.find({})

        return res.status(200).send({ status: true, message: "All helpSupport details", data: helpSupportData })
    }
    catch (err) {
        return res.status(500).send({ status: false, error: err.message });
    }
}

const deletehelpSupport = async function (req, res) {
    try {
        let helpSupportId = req.params.helpSupportId

        let helpSupportData = await helpSupportModel.findByIdAndDelete(helpSupportId)

        if (!helpSupportData) { return res.status(404).send({ status: false, message: "helpSupport is not found" }) }

        return res.status(200).send({ status: true, message: "helpSupport Deleted", data: helpSupportData })
    }
    catch (err) {
        return res.status(500).send({ status: false, error: err.message });
    }
}

const UpdatehelpSupport = async function (req, res) {
    try {
        const helpSupportId = req.params.helpSupportId

        const updatedhelpSupport = await helpSupportModel.findByIdAndUpdate({ _id: helpSupportId },
            {
                // $set: { fname: fname, lname: lname, email: email, profileImage: profileImage, phone: phone, password: helpSupportData.password, address: address },
                $set: req.body,
            }, { new: true });

        return res.status(200).send({ status: true, message: "helpSupport updated", data: updatedhelpSupport })

    } catch (error) {
        return res.status(500).send({ status: false, data: error.message })
    }
}

module.exports = { createhelpSupport, gethelpSupport, getAllhelpSupport, deletehelpSupport, UpdatehelpSupport }