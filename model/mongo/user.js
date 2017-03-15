const mongoose = require('mongoose')
const Schema = mongoose.Schema
const config = require('../../config')

const User = new Schema({
    name: String
})

User.static.findOneByname = function(name){
    return this.findOne({
        name
    }).exex()
}


module.exports = mongoose.model('User', User)
