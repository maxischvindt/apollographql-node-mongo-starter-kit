const { db } = require('./client')
module.exports = {
  Books: db.collection('books'),
  Authors: db.collection('authors')
}
