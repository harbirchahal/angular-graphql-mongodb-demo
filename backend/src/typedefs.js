const typeDefs = [`
  type Person {
    id: Int
    firstname: String
    lastname: String
    email: String
    isActive: Boolean
  }

  type Query {
    persons: [Person]
    person(id: Int!): Person
  }

  type Mutation {
    update(id: Int!, firstname: String, lastname: String, isActive: Boolean): Person
  }
`];

export default typeDefs;