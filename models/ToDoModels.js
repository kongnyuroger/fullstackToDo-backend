const mongoose = require("mongoose")

const todoShcema = new mongoose.Schema({
    text: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('ToDO', todoShcema)