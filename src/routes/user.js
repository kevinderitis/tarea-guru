const { Router } = require('express')
const { saveSessionUser } = require('../controllers/user') 
const userRouter = Router()

userRouter.post('/', saveSessionUser)


module.exports = userRouter;