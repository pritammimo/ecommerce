import express from "express";
import {
 authUser,deleteUser,getUserProfile,getUsers,registerUser,updateUserProfile
} from "../controllers/userController.js";
const router = express.Router();
import { admin, protect } from '../middleware/authMiddleware.js';

router.route('/').post(registerUser).get(protect,admin,getUsers)
router.post('/login',authUser)
// router.route("/").get(getProducts);
router.route("/profile").get(protect,getUserProfile).put(protect,updateUserProfile)
router.route('/:id').delete(protect,admin,deleteUser)
export default router;
