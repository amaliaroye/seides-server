const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
  map: {
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
  player: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player',
    required: true
  },
  events: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Npc'
  }]
}, {
  timestamps: true
})

module.exports = mongoose.model('Game', gameSchema)
