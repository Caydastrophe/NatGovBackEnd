const mongoose = require('mongoose')

const postschema = mongoose.Schema(
    {
        id: {type: String, required: true},
        caption: {type: String , required: true},
        likes: {type: Number, required: true},
        imgUrl: {type: String, required: true}
    }
)

module.exports = mongoose.model('Post', postschema)