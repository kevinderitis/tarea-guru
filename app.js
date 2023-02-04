const express = require('express')
const app = express()
const homeworkRouter = require('./src/routes/homework')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/homework', homeworkRouter)

const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => console.log(`Server running on port ${server.address().port}`))
server.on('error', error => console.log(err))