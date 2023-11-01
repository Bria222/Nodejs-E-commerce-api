const loginUser = (req, res, next) => {
  const username = req.body.username
  res.status(200).send(`Welcome brian ${username}`)
  console.log(username)
}

const registerUser = (req, res, next) => {
  res.status(200).json({ success: true, data: ['brian', 'peter'] })
}
module.exports = { loginUser, registerUser }
