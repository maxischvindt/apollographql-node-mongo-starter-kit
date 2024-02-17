const { ObjectId } = require('mongodb')
const { mongoClient } = require('../mongo-db/client')
const { log } = require('../utils/log')
const { Authors, Books } = require('../mongo-db/collections')

async function startSeed () {
  await mongoClient.connect()
  await Authors.insertMany(authors)
  log('Authors inserted 👴')
  await Books.insertMany(books)
  log('Books inserted 📚')
  await mongoClient.close()
}

startSeed().then(() => {
  log('Seed completed 🌱')
  process.exit()
})

const authors = [
  { _id: new ObjectId('65cacde5de95b0db6a870d68'), firstName: 'J. K.', lastName: 'Rowling' },
  { _id: new ObjectId('65cacdf5de95b0db6a870d69'), firstName: 'J.R.R.', lastName: 'Tolkien' }
]

const books = [
  {
    _id: new ObjectId('65cacd44de95b0db6a870d65'),
    title: "Harry Potter - Philosopher's Stone",
    authorId: new ObjectId('65cacde5de95b0db6a870d68')
  },
  {
    _id: new ObjectId('65cacd72de95b0db6a870d66'),
    title: 'Harry Potter - Chamber of Secrets',
    authorId: new ObjectId('65cacde5de95b0db6a870d68')
  },
  {
    _id: new ObjectId('65d10c8a2b1983b8cc8d75b0'),
    title: 'Harry Potter - Prisoner of Azkaban',
    authorId: new ObjectId('65cacde5de95b0db6a870d68')
  },
  {
    _id: new ObjectId('65d10d002b1983b8cc8d75b5'),
    title: 'The Hobbit',
    authorId: new ObjectId('65cacdf5de95b0db6a870d69')
  },
  {
    _id: new ObjectId('65d10d0b2b1983b8cc8d75b6'),
    title: 'The Fellowship of the Ring',
    authorId: new ObjectId('65cacdf5de95b0db6a870d69')
  },
  {
    _id: new ObjectId('65d10d152b1983b8cc8d75b7'),
    title: 'The Two Towers',
    authorId: new ObjectId('65cacdf5de95b0db6a870d69')
  }
]
