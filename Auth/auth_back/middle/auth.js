// middleware/auth.js
import jwt from 'jsonwebtoken';
// import User from '../model/reg.js'


const authMiddleware = async (req, res, next) => {
  console.log(req.headers.authorization)
  try {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(' ')[1]
    const decoded = jwt.verify(token, process.env.jwt);
    console.log(token)
      // let user  = await User.find()
      // console.log(user);
      next()
  } else {
    return res.status(401).send('Access denied');
  }
    // req.user = await User.findById()
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
};

export default authMiddleware;
