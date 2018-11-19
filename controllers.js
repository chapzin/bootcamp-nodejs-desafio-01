module.exports = {
  index (req, res) {
    return res.render('index')
  },
  check (req, res) {
    const { age } = req.body
    if (age >= 18) {
      return res.redirect(`/major/?age=${age}`)
    } else {
      return res.redirect(`/minor/?age=${age}`)
    }
  },
  major (req, res) {
    const { age } = req.query
    return res.render('major', { age })
  },
  minor (req, res) {
    const { age } = req.query
    return res.render('minor', { age })
  }
}
