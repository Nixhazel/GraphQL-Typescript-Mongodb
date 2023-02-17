import { BookModel } from "./model";
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
        async createBook(root, { title, author, pages }) {
            const newBook = await BookModel.create({
                title,
                author,
                pages,
            });
            return newBook;
        },
    },
};
