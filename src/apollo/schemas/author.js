module.exports = `#graphql
type Author {
    _id: ID
    firstName: String
    lastName: String
}

extend type Query {
    authors: [Author]
    author(_id: ID!): Author
}
`
