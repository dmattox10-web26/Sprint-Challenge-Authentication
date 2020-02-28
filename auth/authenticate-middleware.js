/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const { authorization } = req.headers
  const secret = process.env.JWT_SECRET || 'is it secret, is it safe?'
  if (authorization) {
    jwt.verify(authorization, secret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: 'invalid credentials' })
      }
      else {
        req.decodedToken = decodedToken
        next()
      }
    })
  }
};
