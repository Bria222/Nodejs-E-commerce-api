const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token

  if (authHeader) {
    jwt.verify(token, process.env.JWT_SECRET,(user,err)={
     if (err) {
      return res.status(403).json('oops your token is invalid')
      req.user = user
      next()
     }
    })
  } else {
    return res.status(401).json('you are not authenticated')
  }
}

const verifyTokenandAuthorization = (req,res,next)=>{
 verifyToken(req,res, ()=>{
  if (req.user.id === req.params.id || req.user.isAdmin) {
   next()
  }else{
 return res.status(403).json('you are not authorized to perform this action!')
  }
 })
}

module.exports =  {verifyToken,verifyTokenandAuthorization}