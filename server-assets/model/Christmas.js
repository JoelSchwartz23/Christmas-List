let mongoose = require('mongoose')
let Schema = mongoose.Schema

//define the schema
let schema = new Schema({
  name: { type: String, required: true },
  img: { type: String },
  price: { type: String },
  reason: { type: String },
  purchase: { type: String },
  color: { type: String },
  size: { type: String },
  shoesize: { type: String },
  quantity: { type: Number }
})

module.exports = mongoose.model('christmas', schema)