const { saveHomework } = require('../db/DAO/homework')
const { mercadopagoPayment } = require('../db/DAO/mercadopago')
const { quoteHomework } = require('../utils/utils')

const saveHomeworkService = async homework => {
    try {
      let value = quoteHomework(homework.data)
      let response = await mercadopagoPayment(homework.email)
      homework.preference_id = response.id;
      await saveHomework(homework)   
      return response;
    } catch (error) {
        console.log(error)
        throw error
    }
 
}

const setNewPayment = preferenceId => {
  try {
    
  } catch (error) {
    console.log(error)
    throw error
  }
}

module.exports = { saveHomeworkService }