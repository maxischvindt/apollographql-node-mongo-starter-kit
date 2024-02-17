const { startStandaloneServer } = require('@apollo/server/standalone')
const server = require('./src/apollo/server')
const { mongoClient } = require('./src/mongo-db/client')
const { log } = require('./src/utils/log')

async function startServer () {
  await mongoClient.connect()
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
  })
  return url
}

startServer().then(url => {
  log(`🚀 Server ready at: ${url}`)
})
