// const mongoose = require('mongoose');
// const homeworkModel = require('../model/homework')

// const initDatabase = async () => {
//     try {
//         await mongoose.connect('mongodb+srv://coderhouse:<password>@cluster0.jzrq5dm.mongodb.net/ecommerce?retryWrites=true&w=majority', {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true,

//     })
//     } catch (error) {
//         console.log(error)
//         throw new Error(error)
//     }
// }

// initDatabase()

const saveHomework = async homework => {
    // let hm = await homeworkModel(homework)
    // hm.save()
    console.log(homework)
}

module.exports = { saveHomework }