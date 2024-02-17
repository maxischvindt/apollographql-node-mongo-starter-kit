const { ObjectId } = require('mongodb')
const { Authors } = require('../../mongo-db/collections')

module.exports = {
  Query: {
    authors: async () => Authors.find().toArray(),
    author: (_, args) => Authors.findOne({ _id: new ObjectId(args._id) })
  }
}
