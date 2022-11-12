const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    _id: ID
    authors: [String]
    description: String
    title: String
    bookId:String
    image: String
    link: String

  }

  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Books]
  }

  type Auth {
    token: ID!
    user: User
  }

  input BookInput {
    authors: [String]
    description: String
    title: String
    bookId: String
    image: String
    link: String
    )
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookInput: BookInput): User
    removeBook(bookId: String): User
  }
`;

module.exports = typeDefs;

//on canvas authors desc title book id image and link