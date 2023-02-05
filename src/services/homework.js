const { saveHomework } = require('../db/DAO/homework')
const { mercadopagoPayment } = require('../db/DAO/mercadopago')
const { quoteHomework } = require('../utils/utils')

const saveHomeworkService = async homework => {
    try {
      await saveHomework(homework)   
      let value = quoteHomework(homework.data)
      let urlMP = await mercadopagoPayment(homework)
      return urlMP;
    } catch (error) {
        console.log(error)
        throw error
    }
 
}

module.exports = { saveHomeworkService }