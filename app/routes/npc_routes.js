const express = require('express')
// const passport = require('passport')
const Npc = require('../models/npc')
const customErrors = require('../../lib/custom_errors')
const handle404 = customErrors.handle404
// const requireOwnership = customErrors.requireOwnership
const removeBlanks = require('../../lib/remove_blank_fields')
// const requireToken = passport.authenticate('bearer', { session: false })
const router = express.Router()

// INDEX
router.get('/npcs', (req, res, next) => {
  Npc.find()
    .then(npcs => {
      return npcs.map(npcs => npcs.toObject())
    })
    .then(npcs => res.status(200).json({ npcs: npcs }))
    .catch(next)
})

// SHOW
router.get('/npcs/:id', (req, res, next) => {
  Npc.findById(req.params.id)
    .then(handle404)
    .then(npc => res.status(200).json({ npc: npc.toObject() }))
    .catch(next)
})

// CREATE
router.post('/npcs', (req, res, next) => {
  Npc.create(req.body.npc)
    .then(npc => {
      res.status(201).json({ npc: npc.toObject() })
    })
    .catch(next)
})

// UPDATE
router.patch('/npcs/:id', removeBlanks, (req, res, next) => {
  Npc.findById(req.params.id)
    .then(handle404)
    .then(npc => npc.updateOne(req.body.npc))
    .then((npc) => {
      res.sendStatus(200).json({ npc: npc.toObject() })
    })
    .catch(next)
})

// DESTROY
router.delete('/npcs/:id', (req, res, next) => {
  Npc.findById(req.params.id)
    .then(handle404)
    .then(npc => npc.deleteOne())
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
