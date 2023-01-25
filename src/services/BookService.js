const Book = require("../models/Book.js");

const bookService = {
    getAllBooks: async (option = null) => {
        return option ? await Book.find(option) : await Book.find();
    },
    createBook: async (book) => {
        const newBook = new Book(book);
        return await newBook.save();
    },
    findById: async (id) => {
        return await Book.findById(id);
    },
};

module.exports = bookService;
