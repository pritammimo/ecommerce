import express from "express";
import {
 addOrderItems,getMyorders,getOrderById, updateOrderToPaid,getOrders, updateOrderToDelivered
} from "../controllers/orderController.js";
const router = express.Router();
import { protect,admin} from "../middleware/authMiddleware.js";

router.route("/").post(protect,addOrderItems).get(protect,admin,getOrders);
router.route("/myorders").get(protect, getMyorders);
router.route('/:id').get(protect,getOrderById)
router.route("/:id/pay").get(protect, updateOrderToPaid);
router.route("/:id/deliver").get(protect, admin,updateOrderToDelivered);
export default router;
