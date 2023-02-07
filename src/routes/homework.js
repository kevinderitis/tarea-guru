const { Router } = require('express')
const { saveHomework, backFromMP } = require('../controllers/homework') 
const homeworkRouter = Router()

homeworkRouter.post('/', saveHomework)
homeworkRouter.post('/backURL', backFromMP)

module.exports = homeworkRouter;