const categoryModel = require("../models/categoryModel");
const userModel = require("../models/userModel");

const createCategory = async (req, res) => {
    try {
        let categoryData = req.body;

        const categoryCreated = await categoryModel.create(categoryData);

        return res.status(201).send({ status: true, message: "Category created successfully", data: categoryCreated });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ status: false, message: error.message });
    }
};

const getCategory = async function (req, res) {
    try {
        let categoryId = req.params.categoryId

        let categoryData = await categoryModel.findById(categoryId)

        if (!categoryData) { return res.status(404).send({ status: false, message: "Category Company is not found" }) }

        return res.status(200).send({ status: true, message: "Category Company details", data: categoryData })
    }
    catch (err) {
        return res.status(500).send({ status: false, error: err.message });
    }
}
const getAllCategory = async function (req, res) {
    try {

        let categoryData = await categoryModel.find({})

        return res.status(200).send({ status: true, message: "All Category details", data: categoryData })
    }
    catch (err) {
        return res.status(500).send({ status: false, error: err.message });
    }
}

const deleteCategory = async function (req, res) {
    try {
        let categoryId = req.params.categoryId

        let categoryData = await categoryModel.findByIdAndDelete(categoryId)

        if (!categoryData) { return res.status(404).send({ status: false, message: "Category is not found" }) }

        return res.status(200).send({ status: true, message: "Category Deleted", data: categoryData })
    }
    catch (err) {
        return res.status(500).send({ status: false, error: err.message });
    }
}

const UpdateCategory = async function (req, res) {
    try {
        const categoryId = req.params.categoryId

        const updatedCategory = await categoryModel.findByIdAndUpdate({ _id: categoryId },
            {
                // $set: { fname: fname, lname: lname, email: email, profileImage: profileImage, phone: phone, password: categoryData.password, address: address },
                $set: req.body,
            }, { new: true });

        return res.status(200).send({ status: true, message: "Category updated", data: updatedCategory })

    } catch (error) {
        return res.status(500).send({ status: false, data: error.message })
    }
}

module.exports = { createCategory, getCategory, getAllCategory, deleteCategory, UpdateCategory }