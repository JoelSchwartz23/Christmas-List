let express = require('express')
let bp = require('body-parser')// turns post and puts back into a json object
let server = express()
let port = process.env.port || 3000 //for deployment 

//establish connection to database 
require('./server-assets/db/mlab-config')


//middleware
server.use(express.static(__dirname + '/public'))//this makes it so the front end works
server.use(bp.json())
server.use(bp.urlencoded({ extended: true }))// allows the use of form inputs

//register routes
let christmasRoutes = require('./server-assets/route/christmas-route')


server.use('/api/christmas', christmasRoutes)

//catch all
server.use('*', (error, req, res, next) => {
  res.status(error.status || 404).send({ message: error.message })
})

server.listen(port, () => {
  console.log('Server running on port:', port)
})