const mongoose = require('mongoose')

const playerSchema = new mongoose.Schema({
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
  games: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Game'
  }
}, {
  timestamps: true,
  toObject: {
    // remove `hashedPassword` field when we call `.toObject`
    transform: (_doc, user) => {
      delete user.hashedPassword
      return user
    }
  }
})

module.exports = mongoose.model('Player', playerSchema)
