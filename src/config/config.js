const os = require('os');
require('dotenv').config()

module.exports = {
 MP_ACCESS_TOKEN: process.env.MP_ACCESS_TOKEN || '',
 ITEM_NAME: process.env.ITEM_NAME || 'Item',
 ITEM_PRICE: process.env.ITEM_PRICE || 1000,
 HOSTNAME: process.env.HOSTNAME || 'https://www.tarea.guru',
 UNIT_PRICE: process.env.UNIT_PRICE || 499
}