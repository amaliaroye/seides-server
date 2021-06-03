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
  points: {
    type: Number
  },
  request: {
    type: String
  },
  options: [String],
  requestComplete: {
    type: Boolean,
    default: false
  }
}, { // options
  toObject: { getters: true },
  toJSON: { getters: true }
})

// Virtual Attributes
//
npcSchema.virtual('requestMessage').get(function () {
  return this.name + ' wants ' + this.request
})

//
npcSchema.virtual('sprite').get(function () {
  return (this.name.replace(/\s+/g, '-')).toLowerCase()
})

// npcSchema.methods.speak = function () {
//   const greeting = this.name
//     ? 'Meow name is ' + this.name
//     : "I don't have a name"
//   console.log(greeting)
// }

/*
request: {

}
*/

module.exports = mongoose.model('Npc', npcSchema)
