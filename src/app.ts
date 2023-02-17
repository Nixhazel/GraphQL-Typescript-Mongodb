// import { ApolloServer } from "apollo-server";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from './typeDefs'
import { resolvers } from './resolver';
import mongoose from "mongoose";

mongoose.set("strictQuery", true);




const books = [
	{
		title: "The Awakening",
		author: "Kate Chopin",
	},
	{
		title: "City of Glass",
		author: "Paul Auster",
	},
];


  mongoose.connect(
		"mongodb+srv://Olokor:Nyeore14@cluster1.s2bbhxg.mongodb.net/GraphQL-Practice"
	);
	const connection = mongoose.connection;
	connection.on("connected", () => {
		console.log("MongoDB is Connected");
	});



const server = new ApolloServer({
	typeDefs,
	resolvers,
});


// mongoose
// 	.connect(
// 		"mongodb+srv://Olokor:Nyeore14@cluster1.s2bbhxg.mongodb.net/GraphQL-Practice"
// 	)
// 	.then(() => {
// 		console.log("MongoDB connection Successful");
// 		return server.listen({ port: 4000 });
// 	})
// 	.then((res) => {
// 		console.log("🚀 Server Running on :", res.port);
// 	});
  


const { url } = await startStandaloneServer(server, {
	listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
