const { saveHomeworkService } = require('../services/homework')

const saveHomework = async (req, res) => {
    let homework = req.body;
    let cotization = await saveHomeworkService(homework)
    res.json({ msg: "Homework recived", cotization })
}

module.exports = { saveHomework };