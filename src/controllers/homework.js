const { saveHomeworkService } = require('../services/homework')

const saveHomework = async (req, res) => {
    try {
        let homework = req.body;
        let cotization = await saveHomeworkService(homework)
        res.json({ msg: "Homework recived", cotization })
    } catch (error) {
        res.json({ msg: "Error", error })
    }

}

module.exports = { saveHomework };