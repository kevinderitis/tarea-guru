const config = require('../config/config')

const quoteHomework = homework => {
    let price = homework.length * Number(config.UNIT_PRICE)
    return price
}

module.exports = { quoteHomework }