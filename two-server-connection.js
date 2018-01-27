const http = require('http')
const nicePORT = 7000
const meanPORT = 7500

function handleNiceRequest(request, response) {

  response.end("You are a Nice Person.")
}

const server = http.createServer(handleNiceRequest)

server.listen(nicePORT, function () {
  console.log("Server listening on http://localhost:" + nicePORT)
})

function handleMeanRequest (request, response) {

  response.end("You are a jerk.")
}

const meanServer = http.createServer(handleMeanRequest)

meanServer.listen(meanPORT, function () {
  console.log("Server listening on http://localhost:" + meanPORT)
})

