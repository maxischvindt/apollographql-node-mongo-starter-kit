const { Books } = require('../../mongo-db/collections')
module.exports = {
  Query: {
    books: () =>
      Books.aggregate([
        {
          $lookup: {
            from: 'authors',
            localField: 'authorId',
            foreignField: '_id',
            as: 'author'
          }
        },
        { $unwind: '$author' }
      ]).toArray()
  }
}
