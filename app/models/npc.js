/* NPC Schema */
const mongoose = require('mongoose')

const npcSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  request: {
    type: String
  },
  requestOptions: {
    // array of strings
    type: [String]
  },
  objectiveReached: {
    type: Boolean,
    default: false
  },
  points: {
    type: Number
  }
})

module.exports = mongoose.model('Npc', npcSchema)

/*
name: Luna
request: 'chomp the feets'
requestCompleted: false
objectiveResponses: ['let her chomp the feets', 'run away!']
points: 5
*/
