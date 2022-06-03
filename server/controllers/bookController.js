const Book = require("../models/book");

class BookController {
  static async getBooks(req, res) {
    try {
      const { keyword } = req.query;
      const response = await Book.findBooks(keyword);
      if (!response) {
        throw new Error("Not Found");
      }
      res.status(200).json(response);
    } catch (error) {
      if (error.message === "Not Found") {
        res.status(404).json({
          message: "Books not found",
        });
      } else {
        res.status(500).json({
          message: "Internal Server Error",
        });
      }
    }
  }

  static async getWishlist(req, res) {
    try {
      const response = await Book.getWishlist();
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  }

  static async addWishlist(req, res) {
    try {
      const data = req.body;
      // console.log(data.volumeInfo.title);
      // const response = await Book.findBook(data.volumeInfo.title);
      // if (response.length !== 0) {
      //   throw new Error("Forbidden");
      // }
      await Book.addWishlist(data);
      res.status(201).json({
        message: "Add to wishlist success",
      });
    } catch (error) {
      if (error.message === "Forbidden") {
        res.status(403).json({
          message: "You already add this book to wishlist",
        });
      } else {
        res.status(500).json({
          message: "Internal Server Error",
        });
      }
    }
  }
}

module.exports = BookController;
