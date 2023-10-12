const mongoose = require('mongoose')

const bulletinBoardschema = mongoose.Schema(
    {
        id: {type: String, required: true},
        caption: {type: String , required: true}
    }
)

module.exports = mongoose.model('BulletinBoard', bulletinBoardschema)