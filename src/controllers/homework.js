const { saveHomeworkService } = require('../services/homework')

const saveHomework = async (req, res) => {
    try {
        let homework = req.body;
        let mp = await saveHomeworkService(homework)
        res.json({ msg: "Redirect to mercadopago", redirectURL: mp.response.init_point })
    } catch (error) {
        res.json({ msg: "Error", error })
    }

}

module.exports = { saveHomework };