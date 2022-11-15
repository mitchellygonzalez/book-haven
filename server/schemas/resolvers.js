const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    getSingleUser: async (parent, args, context) => {
        const foundUser = await User.findOne({
          $or: [{ _id: context.user ? context.user._id : args.id }, { username: args.username }],
        });
    
        if (!foundUser) {
            throw new AuthenticationError('Cannot not find user with this id!');
        }
        return foundUser;
      },

  },

  Mutation: {
    createUser: async(parent, args, context) => {
        const user = await User.create(args);
    
        if (!user) {
            throw new AuthenticationError('Cannot not find user with this id!');
        }
        const token = signToken(user);
        return {token, user};
      },
    
    login: async(parent, args, context) => {
        const user = await User.findOne({ 
          $or: [{ username: args.username }, { email: args.email }] 
        });

        if (!user) {
            throw new AuthenticationError('Cannot not find user with this id!');
        }
    
        const correctPw = await user.isCorrectPassword(args.password);
    
        if (!correctPw) {
            throw new AuthenticationError('Wrong password');
        }
        const token = signToken(user);
        return { token, user };
      },
    saveBook: async(parent, args, context) => {
     if (context.user) {
       const updatedUser = await User.findOneAndUpdate(
         { _id: context.user._id },
         { $addToSet: { savedBooks: args.input } },
         { new: true, runValidators: true }
        );
         return updatedUser;
        }
        throw new AuthenticationError('Please return and log in');
     },
    deleteBook: async (parent, args, context) => {
      if (context.user) {
      const updatedUser = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { savedBooks: { bookId: args.bookId } } },
        { new: true }
      );
      if (!updatedUser) {
        throw new AuthenticationError('Cannot not find user with this id!');
      }
      return updatedUser;
     }
    } 
  }
};

  module.exports = resolvers

  // get a single user by either their id or their username - done!
 
  // create a user, sign a token, and send it back (to client/src/components/SignUpForm.js) - done!

  // login a user, sign a token, and send it back (to client/src/components/LoginForm.js) - done!
  
  // {body} is destructured req.body - ok
  
  // save a book to a user's `savedBooks` field by adding it to the set (to prevent duplicates) - done! line 28+45! 

  // user comes from `req.user` created in the auth middleware function - look for middleware

  // remove a book from `savedBooks` - done!

