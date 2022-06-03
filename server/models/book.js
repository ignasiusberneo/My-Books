const { getDB } = require("../config/mongoConnection");
const { ObjectId } = require("mongodb");
const axios = require("axios");

class Book {
  static books() {
    const database = getDB();
    return database.collection("books");
  }

  static async findBooks(keyword) {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${keyword}`
      );
      return response.data.items;
    } catch (error) {
      throw error;
    }
  }

  static async findBook(title) {
    try {
      const response = await this.books()
        .find()
        .toArray({
          volumeInfo: {
            title: title,
          },
        });

      return response;
    } catch (error) {
      throw error;
    }
  }

  static async getWishlist() {
    try {
      const response = await this.books().find().toArray();
      return response;
    } catch (error) {
      throw error;
    }
  }

  static async addWishlist(data) {
    try {
      await this.books().insertOne(data);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Book;
