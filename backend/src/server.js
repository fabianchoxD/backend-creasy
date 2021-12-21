const express = require("express");
const cors = require('cors');
const app = express();
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");
const logger = require("./core/logger");
const extensions = ({ context }) => {
    return {
        runTime: Date.now() - context.startTime,
    };
};

app.use(logger);
app.use(cors());

app.listen(process.env.PORT, async () => {
    console.log("server is running", 8080);
    await mongoose.connect("mongodb+srv://dbAdmin:XUyGDe3eYReTncxB@clustexforce.b2hgz.mongodb.net/creasysolutions?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("database connected")
});

mongoose.connection.on(
    "error",
    console.error.bind(console, "MongoDB connection error:")
);
const graphqlSchema = require("./schemas/index");
app.use(
    "/graphql",
    graphqlHTTP((request) => {
        return {
            context: { startTime: Date.now() },
            graphiql: true,
            schema: graphqlSchema,
            extensions,
        };
    })
);
