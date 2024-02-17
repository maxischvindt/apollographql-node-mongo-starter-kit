const bookSchema = require('./book')
const authorSchema = require('./author')

const query = `#graphql
type Query {
    _empty: String
}
`

module.exports = [query, bookSchema, authorSchema]
