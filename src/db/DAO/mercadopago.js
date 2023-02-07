const mercadopago = require('mercadopago');
const config = require('../../config/config')

mercadopago.configure({
    access_token: config.MP_ACCESS_TOKEN
  });

const mercadopagoPayment = async email => {
    let response;
    const preference = {
        items: [
          {
            title: config.ITEM_NAME,
            unit_price: Number(config.ITEM_PRICE),
            quantity: 1
          }
        ],
        back_urls: {
            success: "https://www.tarea.guru/homework/backURL",
            failure: "https://www.tarea.guru/failure.html"
        },
        payer: {
          email
        },
        auto_return: "approved"
      };
      
      try {
        response = await mercadopago.preferences.create(preference)
      } catch (error) {
        console.log(error)
        throw new Error('Mercadopago payment error')
      }
      
      return response;
      
}


module.exports = { mercadopagoPayment };