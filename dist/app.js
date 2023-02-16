"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var typeDefs_1 = require("./typeDefs");
var resolver_1 = require("./resolver");
var mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.set("strictQuery", true);
var books = [
    {
        title: "The Awakening",
        author: "Kate Chopin",
    },
    {
        title: "City of Glass",
        author: "Paul Auster",
    },
];
var server = new apollo_server_1.ApolloServer({
    typeDefs: typeDefs_1.typeDefs,
    resolvers: resolver_1.resolvers,
});
mongoose_1.default
    .connect("mongodb+srv://Olokor:Nyeore14@cluster1.s2bbhxg.mongodb.net/Week-9-Week-6-BookLibDB")
    .then(function () {
    console.log("MongoDB connection Successful");
    return server.listen({ port: 4000 });
})
    .then(function (res) {
    console.log("🚀 Server Running on :", res.port);
});
// mongoose.connect(
// 	"mongodb+srv://Olokor:Nyeore14@cluster1.s2bbhxg.mongodb.net/Week-9-Week-6-BookLibDB"
// );
// const connection = mongoose.connection;
// connection.on("connected", () => {
//   console.log("MongoDB is Connected")
// })
// const { url } = await startStandaloneServer(server, {
// 	listen: { port: 4000 },
// });
// console.log(`🚀  Server ready at: ${url}`);
