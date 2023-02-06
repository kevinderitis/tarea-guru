const { Router } = require('express')
const { saveHomework, saveTemporaryQuestion } = require('../controllers/homework') 
const homeworkRouter = Router()

homeworkRouter.post('/', saveHomework)

module.exports = homeworkRouter;