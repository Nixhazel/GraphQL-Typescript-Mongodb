"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.BookModel = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var BookSchema = new Schema({
    title: String,
    author: String,
    pages: Number
});
var UserSchema = new Schema({
    name: String,
    email: String,
});
exports.BookModel = mongoose_1.default.model('books', BookSchema);
exports.UserModel = mongoose_1.default.model('users', UserSchema);
