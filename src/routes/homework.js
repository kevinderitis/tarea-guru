const { Router } = require('express')
const { saveHomework, backFromMP } = require('../controllers/homework') 
const homeworkRouter = Router()

homeworkRouter.post('/', saveHomework)
homeworkRouter.get('/backURL', backFromMP)

module.exports = homeworkRouter;