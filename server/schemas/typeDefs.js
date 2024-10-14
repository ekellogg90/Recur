const typeDefs = /* GraphQL */`
  type User {
    _id: ID
    username: String!
    password: String!
    events: [String]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    eventBoard: [User]!
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    signup(username: String!, password: String!): Auth
    addEvent(_id: ID): User
  }
`;

module.exports = typeDefs;
