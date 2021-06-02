const requestLogger = function (req, res, next) {
  console.log('\n========== INCOMING REQUEST ==========\n')
  console.log(`${new Date()}`)
  console.log(`${req.method} ${req.url}`)
  console.log(`Body: ${JSON.stringify(req.body, null, ' ')}`)
  console.log('\n========== INCOMING REQUEST ==========\n')
  next()
}
// https://www.npmjs.com/package/chalk
module.exports = requestLogger
