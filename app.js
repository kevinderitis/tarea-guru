const express = require('express')
const app = express()
const session = require('express-session')
const cors = require('cors')
const homeworkRouter = require('./src/routes/homework')
const userRouter = require('./src/routes/user')

app.use(cors())
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(session({ secret: 'tareaguru', cookie: { maxAge: 60000 }}))

app.use('/homework', homeworkRouter)
app.use('/user', userRouter)

const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => console.log(`Server running on port ${server.address().port}`))
server.on('error', error => console.log(err))