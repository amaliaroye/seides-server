const express = require('express')
const passport = require('passport')
const Game = require('../models/game')
const customErrors = require('../../lib/custom_errors')
const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership
const removeBlanks = require('../../lib/remove_blank_fields')
const requireToken = passport.authenticate('bearer', { session: false })
const router = express.Router()

// INDEX
router.get('/games', requireToken, (req, res, next) => {
  Game.find({ owner: req.user })
    .then(handle404)
    .then(games => {
      return games.map(games => games.toObject())
    })
    .then(games => res.status(200).json({ games: games }))
    .catch(next)
})

// SHOW
router.get('/games/:id', requireToken, (req, res, next) => {
  Game.findById(req.params.id)
    .then(handle404)
    .then(game => res.status(200).json({ game: game.toObject() }))
    .catch(next)
})

// CREATE
router.post('/games', requireToken, (req, res, next) => {
  req.body.game.owner = req.user.id
  Game.create(req.body.game)
    .then(game => {
      res.status(201).json({ game: game.toObject() })
    })
    .catch(next)
})

// UPDATE
router.patch('/games/:id', requireToken, removeBlanks, (req, res, next) => {
  delete req.body.game.owner

  Game.findById(req.params.id)
    .then(handle404)
    .then(game => {
      requireOwnership(req, game)
      return game.updateOne(req.body.game)
    })
    .then(() => {
      res.sendStatus(204)
    })
    .catch(next)
})

// DESTROY
router.delete('/games/:id', requireToken, (req, res, next) => {
  Game.findById(req.params.id)
    .then(handle404)
    .then(game => {
      requireOwnership(req, game)
      game.deleteOne()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
