const homeworkSchema = new mongoose.Schema({
    user: String,
    email: String,
    homework: [ {
        type: String
    } ]
})
const homeworkModel = mongoose.model('homework', homeworkSchema)


module.exports = homeworkModel;