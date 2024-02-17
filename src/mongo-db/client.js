const { MongoClient, ServerApiVersion } = require('mongodb')
const credentials = require('../config/credentials')

const mongoClient = new MongoClient(credentials.db.url, {
  writeConcern: { w: 'majority' },
  readConcern: { level: 'majority' },
  readPreference: 'primary',
  serverApi: ServerApiVersion.v1
})

const db = mongoClient.db(credentials.db.name)
module.exports = { mongoClient, db }
