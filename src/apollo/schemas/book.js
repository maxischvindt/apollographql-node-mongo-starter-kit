module.exports = `#graphql
type Book {
    _id: ID
    title: String
    author: Author
    authorId: ID
}

extend type Query {
    books: [Book]
}
`
