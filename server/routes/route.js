const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const helpSupportController = require("../controllers/helpSupportController");
const offerController = require("../controllers/offerController");

//USER
router.post("/register", userController.registerUser);
router.get('/user/:userId', userController.getSingleUser)
router.get('/user', userController.getAllUsers)
router.put('/user/:userId', userController.UpdateUser)
router.delete('/user/:userId', userController.deleteUser)

//ISSUES
router.post("/issue", helpSupportController.createhelpSupport);
router.get("/issues", helpSupportController.getAllhelpSupport);
// router.get("/products", productController.getProduct);
// router.get('/products/:productId', productController.getProductById)
// router.put('/products/:productId',aws.awsUpdate, productController.updateProduct)
// router.delete('/products/:productId',  productController.deleteProduct)

// //Offers
router.post("/offer", offerController.createOffer);
router.get("/offers", offerController.getAllOffer);
// router.get("/users/:userId/cart", auth.authentication, auth.authorization, cartController.getCart);
// router.delete("/users/:userId/cart", auth.authentication, auth.authorization, cartController.deleteCart);

// //Order
// router.post("/users/:userId/orders",auth.authentication, auth.authorization, orderController.createOrder);
// router.put("/users/:userId/orders",auth.authentication, auth.authorization, orderController.updateOrder);

router.all('*/', function (req, res) {
    return res.status(400).send({ status: false, message: "Invalid Path" })
})

module.exports = router;
