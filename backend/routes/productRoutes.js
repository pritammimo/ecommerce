import express from 'express';
import { getProductById, getProducts,deleteProduct, updateProduct, createProduct } from '../controllers/productController.js'
const router=express.Router()
import { admin, protect } from "../middleware/authMiddleware.js";
//Fetch all products
router.route("/").get(getProducts).post(protect,admin,createProduct);
router.route("/:id").get(getProductById).delete(protect, admin, deleteProduct)
.put(protect,admin,updateProduct)
export default router;