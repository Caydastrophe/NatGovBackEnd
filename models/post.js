const mongoose = require('mongoose')

const postschema = mongoose.Schema(
    {
        id: {type: String, required: true},
        Title: {type: String , required: true},
        Details: {type: String, required: true},
      //  imgUrl: {type: String, required: true}
    }
)

module.exports = mongoose.model('Post', postschema)