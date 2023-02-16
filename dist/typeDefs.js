"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
var apollo_server_1 = require("apollo-server");
exports.typeDefs = (0, apollo_server_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\ttype Book {\n\t\ttitle: String\n\t\tauthor: String\n\t\tpages: Int\n\t}\n\n\ttype user {\n\t\tid: String\n\t}\n\n\ttype Query {\n\t\tbooks: [Book]\n\t\tbook(id: String!): Book\n\t}\n\n\ttype Mutation {\n\t\tcreateBook(title: String!, author: String! pages: Int): Book\n\t}\n"], ["\n\ttype Book {\n\t\ttitle: String\n\t\tauthor: String\n\t\tpages: Int\n\t}\n\n\ttype user {\n\t\tid: String\n\t}\n\n\ttype Query {\n\t\tbooks: [Book]\n\t\tbook(id: String!): Book\n\t}\n\n\ttype Mutation {\n\t\tcreateBook(title: String!, author: String! pages: Int): Book\n\t}\n"])));
var templateObject_1;
