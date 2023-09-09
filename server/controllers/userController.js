const userModel = require("../models/userModel");

const registerUser = async (req, res) => {
    try {
        let userData = req.body;
        console.log(userData);
        let { email, mobile } = userData;

        // const userExist = await userModel.findOne({ $or: [{ email: email }, { mobile: mobile }] });

        // if (userExist) {
        //     if (userExist.email == email)
        //         return res.status(400).send({ status: false, message: "email id  already exist, send another email" });
        //     console.log(userExist.mobile, mobile);
        //     if (userExist.mobile == mobile)
        //         return res.status(400).send({ status: false, message: "mobile  already exist, send another mobile number" });
        // }

        const userCreated = await userModel.create(userData);

        return res.status(201).send({ status: true, message: "User created successfully", data: userCreated });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ status: false, message: error.message });
    }
};

// const loginUser = async (req, res) => {
//     try {
//         let { email, password } = req.body;

//         let isUserExist = await userModel.findOne({ email: email });

//         if (!isUserExist)
//             return res.status(404).send({ status: false, message: "No user found with given Email", });

//         let passwordCompare = await bcrypt.compare(password, isUserExist.password);

//         if (!passwordCompare) return res.status(400).send({ status: false, message: "Please enter valid password" })

//         let token = jwt.sign(
//             { userId: isUserExist._id, exp: Math.floor(Date.now() / 1000) + 86400 },
//             "dashborad"
//         );

//         let tokenInfo = { userId: isUserExist._id, token: token };

//         res.setHeader('x-api-key', token)

//         return res.status(200).send({ status: true, message: "User login successfull", data: tokenInfo });

//     } catch (err) {
//         return res.status(500).send({ status: false, error: err.message });
//     }
// };

const getSingleUser = async function (req, res) {
    try {
        let userId = req.params.userId

        let userData = await userModel.findById(userId)

        if (!userData) { return res.status(404).send({ status: false, message: "User is not found" }) }

        return res.status(200).send({ status: true, message: "User profile details", data: userData })
    }
    catch (err) {
        return res.status(500).send({ status: false, error: err.message });
    }
}
const getAllUsers = async function (req, res) {
    try {
        let userId = req.params.userId

        let userData = await userModel.find({})

        return res.status(200).send({ status: true, message: "All User details", data: userData })
    }
    catch (err) {
        return res.status(500).send({ status: false, error: err.message });
    }
}

const deleteUser = async function (req, res) {
    try {
        let userId = req.params.userId

        let userData = await userModel.findByIdAndDelete(userId)

        if (!userData) { return res.status(404).send({ status: false, message: "User is not found" }) }

        return res.status(200).send({ status: true, message: "User profile Deleted", data: userData })
    }
    catch (err) {
        return res.status(500).send({ status: false, error: err.message });
    }
}

const UpdateUser = async function (req, res) {
    try {
        const userId = req.params.userId

        const updatedUser = await userModel.findByIdAndUpdate({ _id: userId },
            {
                // $set: { fname: fname, lname: lname, email: email, profileImage: profileImage, phone: phone, password: userData.password, address: address },
                $set: req.body,
            }, { new: true });

        return res.status(200).send({ status: true, message: "User profile updated", data: updatedUser })

    } catch (error) {
        return res.status(500).send({ status: false, data: error.message })
    }
}

module.exports = { registerUser, getSingleUser, getAllUsers, UpdateUser, deleteUser }