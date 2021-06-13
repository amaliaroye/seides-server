const requestLogger = function (req, res, next) {
  console.log('\n========== BEEP BOOP INCOMING REQUEST ==========\n')
  console.log(`${new Date()}`)
  console.log(`${req.method} ${req.url}`)
  console.log(`Body: ${JSON.stringify(req.body, null, '  ')}`)
  console.log('\n============= BEEP BOOP THATS IT. ==============\n')
  next()
}
// https://www.npmjs.com/package/chalk
module.exports = requestLogger
