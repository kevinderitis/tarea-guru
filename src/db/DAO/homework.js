const mongoose = require('mongoose')
const homeworkModel = require('../model/homework')

const initDatabase = async () => {
    try {
        await mongoose.connect('mongodb+srv://kevinderitis:Ujl3V7iJbw2nAsYX@cluster0.ndvhrgl.mongodb.net/tareaguru?retryWrites=true&w=majority')
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

initDatabase()

const saveHomework = async (homework) => {
    try {
        let hm = await homeworkModel(homework)
        await hm.save()
        console.log(homework)
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }

}

const setPayment = async preferenceId => {
    try {
        await homeworkModel.updateOne({ preference_id: preferenceId }, { $set: { payment: "Approved" } })
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

module.exports = { saveHomework, setPayment }