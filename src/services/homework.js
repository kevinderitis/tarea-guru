const { saveHomework, setPayment } = require('../db/DAO/homework')
const { mercadopagoPayment } = require('../db/DAO/mercadopago')
const { quoteHomework } = require('../utils/utils')

const saveHomeworkService = async homework => {
    try {
      let price = quoteHomework(homework.data)
      let mp = await mercadopagoPayment(homework.email, price)
      homework.preference_id = mp.response.id;
      await saveHomework(homework)   
      return mp;
    } catch (error) {
        console.log(error)
        throw error
    }
 
}

const setNewPayment = async preferenceId => {
  try {
    await setPayment(preferenceId)
  } catch (error) {
    console.log(error)
    throw error
  }
}

module.exports = { saveHomeworkService, setNewPayment }