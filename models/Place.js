const { model, Schema } = require('mongoose')

const placeSchema = new Schema({
  name: String,
  tipo: String,
  location:{
    address: String,
    coordinates: [Number, Number]
  }, 
  rate: Number, 
  avgPrice: Number, 
  waitTime: String
},{
  timestamps: true,
  versionKey: false
})


module.exports = model('Places', placeSchema)