// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  type Book {
    id: ID
    title: String
    genre: String
    author: Author
  }

  type Author {
    id: ID!
    name: String
    age: Int
    books: [Book]
  }

  type Query {
    books: [Book]
    authors: [Author]
    book(id: ID!): Book
    author(id: ID!): Author
  }

  type Mutation {
    createAuthor(name: String, age: Int): Author
    createBook(title: String, genre: String, authorId: ID!): Book
  }
`;

module.exports = typeDefs;
