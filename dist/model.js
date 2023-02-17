import mongoose from "mongoose";
const Schema = mongoose.Schema;
const BookSchema = new Schema({
    title: String,
    author: String,
    pages: Number
});
const UserSchema = new Schema({
    name: String,
    email: String,
});
export const BookModel = mongoose.model('books', BookSchema);
export const UserModel = mongoose.model('users', UserSchema);
