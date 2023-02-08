const config = require('../config/config')

const quoteHomework = homework => {
    let price = (homework.length - 1) * Number(config.UNIT_PRICE)
    return price
}

module.exports = { quoteHomework }