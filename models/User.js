const { model, Schema } = require('mongoose')
const PLM = require('passport-local-mongoose')

const userSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  profile: {
    presupuesto: {
      type: Number,
      default: 0
    },
    gastos: Array
  },
  googleID: String
},{
  timestamps: true,
  versionKey: false
})

userSchema.plugin(PLM, {usernameField: 'email'})
module.exports = model('User', userSchema)