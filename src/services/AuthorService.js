const Author = require("../models/Author.js");

const authorService = {
    getAllAuthors: async () => {
        return await Author.find();
    },
    createAuthor: async (arguments) => {
        const newAuthor = new Author(arguments);
        return await newAuthor.save();
    },
    findById: async (id) => {
        return await Author.findById(id);
    },
};

module.exports = authorService;
