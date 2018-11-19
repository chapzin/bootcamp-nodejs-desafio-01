module.exports = {
  checkAge (req, res, next) {
    const { age } = req.query
    if (!age) {
      return res.redirect('/')
    }
    return next()
  }
}
