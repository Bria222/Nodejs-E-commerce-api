const loginUser = (req, res, next) => {
  res.status(200).send(`Welcome brian`)
}

const registerUser = (req, res, next) => {
  res.status(200).json({ success: true, data: ['brian', 'peter'] })
}
module.exports = { loginUser, registerUser }
