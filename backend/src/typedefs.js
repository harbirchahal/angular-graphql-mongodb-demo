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
    addPerson(firstname: String, lastname: String, email: String!): Person
  }
`];

export default typeDefs;