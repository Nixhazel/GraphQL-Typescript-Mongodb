import { gql } from "apollo-server";
export const typeDefs = gql `
	type Book {
        _id: String
		title: String
		author: String
		pages: Int
	}

	type User {
        emai: String
        name: String
        token: String
	}

	type Query {
		books: [Book]
		book(id: String!): Book
	}

	type Mutation {
		createBook(title: String!, pages: Int): Book
        createUser(emai: String, name: String ): User
	}
`;
