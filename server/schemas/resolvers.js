const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('events')
            }
            throw AuthenticationError;
        },
        eventBoard: async () => {
            return User.find();
        },
    },

    Mutation: {
        signup: async (parent, { username, password }) => {
            const user = await User.create({ username, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });

            if (!user) {
                throw AuthenticationError;
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw AuthenticationError;
            }

            const token = signToken(user);
            return { token, user };
        },
        // Change this to add event?
        addWin: async (parent, { _id }) => {
            return User.findOneAndUpdate(
                { _id: _id },
                { $inc: { wins: 1 } },
                { new: true }
            )
        }
    },
};

module.exports = resolvers;
