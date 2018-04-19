var express = require('express')
var bodyparser = require('body-parser')
var path = require('path')
var PORT = process.env.PORT

var app = express()

app.use(express.static(path.join(__dirname, './app/public')))
app.use(bodyparser.urlencoded{extended: true})
app.use(bodyparser.json())
app.use(bodyparser.text())

require(path.join(__dirname, './app/routing/apiRoutes'))(app)
require(path.join(__dirname, './app/routing/htmlRoutes'))(app)

app.listen(PORT, function() {
    console.log('Friend Finder app is listening on PORT: ' + PORT)
})