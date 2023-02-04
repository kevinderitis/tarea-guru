const mongoose = require('mongoose')

const homeworkSchema = new mongoose.Schema({
    user: String,
    email: String,
    data: [ {
        type: String
    } ]
})
const homeworkModel = mongoose.model('homework', homeworkSchema)


module.exports = homeworkModel;