const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
  owner: { // owner of game
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  map: { // name of map file
    type: String
  },
  over: { // have all the NPCs been interacted with?
    type: Boolean,
    default: false
  },
  score: {
    type: Number,
    default: 0
  },
  npcs: [{ // ARRAY OF IDs, list of npcs occupying the map
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Npc'
  }],
  // ARRAY OF OBJECTS, records game events
  logs: [{ any: {} }]
}, { // options
  timestamps: true,
  toObject: { getters: true },
  toJSON: { getters: true }
})

module.exports = mongoose.model('Game', gameSchema)
