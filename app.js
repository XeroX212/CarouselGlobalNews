const express = require('express')

const app = express()
const port = 8080

// Templating Engine
app.set('views', './src/views')
app.set('view engine', 'ejs')

//Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

// Routes
const carouselRouter = require('./src/routes/carousel')

app.use('/', carouselRouter)

// Listen on port 8080
app.listen(port, () => console.log(`Listening on port ${port}`))