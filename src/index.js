const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.MONGODB_URL;

// Connect to mongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
        process.exit();
    }
};

connectDB();

// load schema & resolvers
const typeDefs = require("./graphql/schema.js");
const resolvers = require("./graphql/resolver.js");

// load db methods
const bookService = require("./services/BookService.js");
const authorService = require("./services/AuthorService.js");

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const main = async () => {
    // Passing an ApolloServer instance to the `startStandaloneServer` function:
    //  1. creates an Express app
    //  2. installs your ApolloServer instance as middleware
    //  3. prepares your app to handle incoming requests
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
        context: async () => ({ bookService, authorService }),
    });

    console.log(`🚀  Server ready at: ${url}`);
};

main();
