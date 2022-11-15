const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Books {
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

  input savedBooks {
    authors: [String]
    description: String
    title: String
    bookId: String
    image: String
    link: String
  }

  type Query {
    getSingleUser: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    createUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: savedBooks): User
    deleteBook(bookId: String): User
  }
`;

module.exports = typeDefs;

//on canvas authors desc title book id image and link