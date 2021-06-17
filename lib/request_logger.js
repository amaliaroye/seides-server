const requestLogger = function (req, res, next) {
  console.log('\n========== BEEP BOOP INCOMING REQUEST ==========')
  console.log(`${new Date()}`)
  console.log(`Headers: ${req.headers.authorization}`)
  console.log(`${req.method} ${req.url}`)
  console.log(`Body: ${JSON.stringify(req.body, null, '  ')}`)
  console.log('============= BEEP BOOP THATS IT. ==============')
  next()
}
// https://www.npmjs.com/package/chalk
module.exports = requestLogger
