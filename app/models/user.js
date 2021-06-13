const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  hashedPassword: {
    type: String,
    required: true
  },
  token: {
    type: String
  },
  name: {
    type: String
  },
  sprite: { // image name of sprite sheet
    type: String
  },
  games: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Game'
  }]
}, {
  timestamps: true,
  toObject: {
    transform: (_doc, user) => {
      delete user.hashedPassword
      return user
    },
    getters: true
  },
  toJSON: {
    transform: (_doc, user) => {
      delete user.hashedPassword
      return user
    },
    getters: true
  }
})

module.exports = mongoose.model('User', userSchema)
