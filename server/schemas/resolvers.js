// import user model
const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
// import sign token function from auth
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    getSingleUser: async (parent, args, context) => {
        const foundUser = await User.findOne({
          $or: [{ _id: context.user ? context.user._id : args.id }, { username: args.username }],
        });
    
        if (!foundUser) {
            throw new AuthenticationError('cannot find user with this id!');
        }
    
        return foundUser;
      },

  },

  Mutation: {
    createUser: async(parent, args, context) => {
        const user = await User.create(args);
    
        if (!user) {
            throw new AuthenticationError('cannot find user with this id!');
        }
        const token = signToken(user);
        return {token, user};
      },
    
    login: async(parent, args, context) => {
        const user = await User.findOne({ $or: [{ username: args.username }, { email: args.email }] });
        if (!user) {
            throw new AuthenticationError('cannot find user with this id!');
        }
    
        const correctPw = await user.isCorrectPassword(args.password);
    
        if (!correctPw) {
            throw new AuthenticationError('wrong password');
        }
        const token = signToken(user);
        return { token, user };
      },

  }
  // get a single user by either their id or their username
 
  // create a user, sign a token, and send it back (to client/src/components/SignUpForm.js)

  // login a user, sign a token, and send it back (to client/src/components/LoginForm.js)
  // {body} is destructured req.body
  
  // save a book to a user's `savedBooks` field by adding it to the set (to prevent duplicates)
  // user comes from `req.user` created in the auth middleware function
  async saveBook({ user, body }, res) {
    console.log(user);
    try {
      const updatedUser = await User.findOneAndUpdate(
        { _id: user._id },
        { $addToSet: { savedBooks: body } },
        { new: true, runValidators: true }
      );
      return res.json(updatedUser);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  },
  // remove a book from `savedBooks`
  async deleteBook({ user, params }, res) {
    const updatedUser = await User.findOneAndUpdate(
      { _id: user._id },
      { $pull: { savedBooks: { bookId: params.bookId } } },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "Couldn't find user with this id!" });
    }
    return res.json(updatedUser);
  },
};
