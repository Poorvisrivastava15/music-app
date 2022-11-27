const { model, Schema } = require('../connection');

const mySchema = new Schema({
    name : String,
    email : String,
    password : String,
    age : Number
})

module.exports = model( 'usersCollection', mySchema );