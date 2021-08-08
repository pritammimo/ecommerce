import express from "express";
import {
 addOrderItems,getMyorders,getOrderById, updateOrderToPaid
} from "../controllers/orderController.js";
const router = express.Router();
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(protect,addOrderItems);
router.route("/myorders").get(protect, getMyorders);
router.route('/:id').get(protect,getOrderById)
router.route("/:id/pay").get(protect, updateOrderToPaid);

export default router;
