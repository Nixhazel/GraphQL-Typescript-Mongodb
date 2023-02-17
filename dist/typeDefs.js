import { gql } from "apollo-server";
export const typeDefs = gql `
	type Book {
		title: String
		author: String
		pages: Int
	}

	type user {
		id: String
	}

	type Query {
		books: [Book]
		book(id: String!): Book
	}

	type Mutation {
		createBook(title: String!, author: String! pages: Int): Book
	}
`;
