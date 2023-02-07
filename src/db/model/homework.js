const mongoose = require('mongoose')

const homeworkSchema = new mongoose.Schema({
    user: String,
    email: String,
    preference_id: String,
    data: [ {
        type: String
    } ],
    payment: {
        type: String,
        default: 'Pending'
      }
})
const homeworkModel = mongoose.model('homework', homeworkSchema)


module.exports = homeworkModel;