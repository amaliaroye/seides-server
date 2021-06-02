/* NPC Schema: creates instances of NPCs */
const mongoose = require('mongoose')

const capitalize = function (val) {
  if (typeof val !== 'string') val = ''
  return val.charAt(0).toUpperCase() + val.substring(1)
}

const npcSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    set: capitalize
  },
  request: {
    type: String
  },
  options: {
    // array of strings
    type: [String]
  },
  requestComplete: {
    type: Boolean,
    default: false
  },
  points: {
    type: Number
  }
}, { // options
  toObject: { getters: true },
  toJSON: { getters: true }
})

// Virtual Attributes
//
npcSchema.virtual('requestMessage').get(function () {
  return this.name + ' ' + this.request
})

//
npcSchema.virtual('sprite').get(function () {
  return this.name.toLowerCase()
})

// npcSchema.methods.speak = function () {
//   const greeting = this.name
//     ? 'Meow name is ' + this.name
//     : "I don't have a name"
//   console.log(greeting)
// }

module.exports = mongoose.model('Npc', npcSchema)
