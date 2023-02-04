const { Router } = require('express')
const { saveHomework } = require('../controllers/homework') 
const homeworkRouter = Router()

homeworkRouter.post('/', saveHomework)


module.exports = homeworkRouter;