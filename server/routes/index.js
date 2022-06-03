const express = require("express");
const router = express.Router();
const BookController = require("../controllers/bookController");

router.get("/books", BookController.getBooks);
router.get("/wishlist", BookController.getWishlist);
router.post("/wishlist", BookController.addWishlist);

module.exports = router;
