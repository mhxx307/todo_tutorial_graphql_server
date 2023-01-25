// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
        books: async (parent, arguments, { bookService }) => await bookService.getAllBooks(),

        authors: async (parent, arguments, { authorService }) => await authorService.getAllAuthors(),

        book: async (parent, arguments, { bookService }) => await bookService.findById(arguments.id),

        author: async (parent, arguments, { authorService }) => await authorService.findById(arguments.id),
    },

    Book: {
        author: async (parent, arguments, { authorService }) => await authorService.findById(parent.authorId),
    },

    Author: {
        books: async (parent, arguments, { bookService }) => await bookService.getAllBooks({ authorId: parent.id }),
    },

    Mutation: {
        createAuthor: async (parent, arguments, { authorService }) => await authorService.createAuthor(arguments),

        createBook: async (parent, arguments, { bookService }) => await bookService.createBook(arguments),
    },
};

module.exports = resolvers;
