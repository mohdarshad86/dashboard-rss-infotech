const addressModel = require("../models/addressModel");

const createAddress = async (req, res) => {
    try {
        let addressData = req.body;

        let { userId } = addressData;

        const userExist = await userModel.findById({ userId: userId });

        if (!userExist) {
            return res.status(400).send({ status: false, message: "Partner/Customer not found" });
        }

        const addressCreated = await addressModel.create(addressData);

        return res.status(201).send({ status: true, message: "address created successfully", data: addressCreated });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ status: false, message: error.message });
    }
};

const getSingleAddress = async function (req, res) {
    try {
        let addressId = req.params.addressId

        let addressData = await addressModel.findById(addressId)

        if (!addressData) { return res.status(404).send({ status: false, message: "address is not found" }) }

        return res.status(200).send({ status: true, message: "address profile details", data: addressData })
    }
    catch (err) {
        return res.status(500).send({ status: false, error: err.message });
    }
}
const getAllAddresss = async function (req, res) {
    try {
        let addressId = req.params.addressId

        let addressData = await addressModel.find({})

        return res.status(200).send({ status: true, message: "All address details", data: addressData })
    }
    catch (err) {
        return res.status(500).send({ status: false, error: err.message });
    }
}

const deleteAddress = async function (req, res) {
    try {
        let addressId = req.params.addressId

        let addressData = await addressModel.findByIdAndDelete(addressId)

        if (!addressData) { return res.status(404).send({ status: false, message: "address is not found" }) }

        return res.status(200).send({ status: true, message: "address profile Deleted", data: addressData })
    }
    catch (err) {
        return res.status(500).send({ status: false, error: err.message });
    }
}

const UpdateAddress = async function (req, res) {
    try {
        const addressId = req.params.addressId

        const updatedaddress = await addressModel.findByIdAndUpdate({ _id: addressId },
            {
                // $set: { fname: fname, lname: lname, email: email, profileImage: profileImage, phone: phone, password: addressData.password, address: address },
                $set: req.body,
            }, { new: true });

        return res.status(200).send({ status: true, message: "address profile updated", data: updatedaddress })

    } catch (error) {
        return res.status(500).send({ status: false, data: error.message })
    }
}

module.exports = { createAddress, getSingleAddress, getAllAddresss, UpdateAddress, deleteAddress }