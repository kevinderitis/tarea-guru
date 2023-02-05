const mercadopago = require('mercadopago');
const config = require('../../config/config')

mercadopago.configure({
    access_token: config.MP_ACCESS_TOKEN
  });

const mercadopagoPayment = async () => {
    let urlMercadopago;
    const preference = {
        items: [
          {
            title: config.ITEM_NAME,
            unit_price: Number(config.ITEM_PRICE),
            quantity: 1
          }
        ],
        back_urls: {
            success: "https://localhost:8080/success",
            failure: "https://localhost:8080/failure",
            pending: "https://localhost:8080/pending"
        }
      };

      try {
        urlMercadopago = await mercadopago.preferences.create(preference)
      } catch (error) {
        console.log(error)
        throw new Error('Mercadopago payment error')
      }
      
      return urlMercadopago;
      
}


module.exports = { mercadopagoPayment };