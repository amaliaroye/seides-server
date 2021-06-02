const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
  owner: { // owner of game
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  map: { // name of map file
    type: String,
    required: true
  },
  over: {
    type: Boolean,
    required: true,
    default: false
  },
  score: {
    type: Number,
    default: 0
  },
  npcs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Npc'
  }]
}, { // options
  timestamps: true,
  toObject: { getters: true },
  toJSON: { getters: true }
})

module.exports = mongoose.model('Game', gameSchema)
