const bcrypt = require('bcrypt')
const router = require('express').Router()
const jwt = require('jsonwebtoken')
const Users = require('../models/users')
const auth = require('../middleware/auth')

router.post('/register', (req, res) => {
  // implement registration
})

router.post('/login', (req, res) => {
  // implement login
})

module.exports = router
