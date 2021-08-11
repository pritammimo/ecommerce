import express from 'express';
import { getProductById, getProducts,deleteProduct, updateProduct, createProduct, createProductReview } from '../controllers/productController.js'
const router=express.Router()
import { admin, protect } from "../middleware/authMiddleware.js";
//Fetch all products
router.route("/").get(getProducts).post(protect,admin,createProduct);
router.route("/:id").get(getProductById).delete(protect, admin, deleteProduct)
router
  .route("/:id/reviews")
  .post(protect, createProductReview)
  .put(protect, admin, updateProduct);
export default router;