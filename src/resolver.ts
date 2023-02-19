import { BookModel, UserModel } from "./model";
import { generateToken } from "./utils/indexu";

export const resolvers = {
	Query: {
		async books(root, {}, {}) {
			const book = await BookModel.find();
			return book;
		},
		async book(root, { id }) {
			const book = await BookModel.findById(id);
			return book;
		},
	},
	Mutation: {
		async createBook(root, { title, pages }, context) {
			if (!context.user) {
                return null
			}
			const newBook = await BookModel.create({
				title,
				pages,
                author: context.user._id
			});
			return newBook;
		},
		async createUser(root, { email, name }) {
			const newUser = await UserModel.create({
				email,
				name,
			});
			const token = generateToken({ email, id: String(newUser._id) });
			return { token, ...newUser };
		},
	},
};
