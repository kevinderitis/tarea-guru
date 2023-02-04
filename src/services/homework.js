const { saveHomework } = require('../db/DAO/homework')
const { quoteHomework } = require('../utils/utils')

const saveHomeworkService = async homework => {
    try {
      await saveHomework(homework)   
      let value = quoteHomework(homework)
      return value;
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
 
}

module.exports = { saveHomeworkService }