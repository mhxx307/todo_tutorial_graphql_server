const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema(
    {
        title: {
            type: String,
        },
        genre: {
            type: String,
        },
        authorId: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("books", BookSchema);
