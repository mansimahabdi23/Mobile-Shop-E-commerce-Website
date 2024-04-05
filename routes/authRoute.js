import express from "express";
import { 
    registerController,
    loginController,
    testController, 
    forgotPasswordController,
    updateProfileController,
    getOrdersController,
    getAllOrdersController,
    orderStatusController} from "../controllers/authController.js";
    import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//register||method post
router.post("/register", registerController);

//login||post

router.post("/login", loginController);

//forgot password
router.post("/forgot-password", forgotPasswordController);

//test routes
router.get("/test", requireSignIn, isAdmin, testController);

//protected user route auth-we will use this page in private route,and will make user dashboard private
router.get("/user-auth", requireSignIn, (req,res) => {
    res.status(200).send({ok:true});
});

//protected admin route
router.get("/admin-auth", requireSignIn, isAdmin, (req,res) => {
    res.status(200).send({ok:true});
});

//update profile
router.put('/profile',requireSignIn,updateProfileController);

//orders
router.get("/orders",requireSignIn, getOrdersController);


//all orders
router.get("/all-orders",requireSignIn, isAdmin, getAllOrdersController);

//order status updateSSS
router.put("/router-status/:orderId",requireSignIn, isAdmin, orderStatusController);

export default router;
