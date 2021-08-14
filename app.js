const express = require('express')
var path = require('path')


const app = express()
// const port = 8080

// Templating Engine
app.set('views', path.join(__dirname, '/src/views'))
app.set('view engine', 'ejs')

//Static Files
app.use(express.static(path.join(__dirname, 'public')))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

// Routes
const carouselRouter = require('./src/routes/carousel')

app.use('/', carouselRouter)

// Listen on port 8080
// app.listen(port, () => console.log(`Listening on port ${port}`))

module.exports = app