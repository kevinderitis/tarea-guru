const path = require('path');
const { saveHomeworkService, setNewPayment } = require('../services/homework')

const saveHomework = async (req, res) => {
    try {
        let homework = { user: req.session.user, email: req.session.email, data: req.body.questions}
        console.log(homework)
        let mp = await saveHomeworkService(homework)
        res.json({ msg: "Redirect to mercadopago", redirectURL: mp.response.init_point })
    } catch (error) {
        res.json({ msg: "Error", error })
    }

}

const backFromMP = async (req, res) => {
   const paymentData = req.query;
   const { preference_id } = paymentData;
   try {
    await setNewPayment(preference_id)
    res.redirect('/gracias.html')
   } catch (error) {
    console.log(error)
    res.json({ msg: "Error", error: JSON.stringify(error) })
   }

} 

module.exports = { saveHomework, backFromMP };