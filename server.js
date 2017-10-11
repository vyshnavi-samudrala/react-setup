const express = require("express")
const app = express()
const http = require("http")
const path = require("path")
const httpServer = http.Server(app)

const port = 4000

app.use('/public', express.static(path.join(__dirname, '/public')))

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html")
})

app.listen(port)

console.log(`app served @ ${port}`)