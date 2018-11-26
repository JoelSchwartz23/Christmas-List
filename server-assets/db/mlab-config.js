let mongoose = require('mongoose')
const connectionString = 'mongodb://student:student1@ds031108.mlab.com:31108/christmas-list'

let connection = mongoose.connection

//establishes connection to the database
mongoose.connect(connectionString, {
  useNewUrlParser: true
})


//console log any errors coming from the database 
connection.on('error', err => {
  console.log("Database Error: ", err)
})

//confirms connection to the database 
connection.once('open', () => {
  console.log("connected to Database")
})