const router = require('express').Router()
const Place = require('../models/Place')

router.get('/', async (req, res) => {
  const places = await Place.find()
  res.send(places)
})

module.exports = router

