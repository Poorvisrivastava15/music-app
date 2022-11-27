const { model, Schema } = require('../connection');

const mySchema = new Schema({
    title : String,
    genre : String,
    artist : String,
    image : String,
    file : String,
    year : String,
    lyrics : String,
    publisher : String
})

module.exports = model( 'musicCollection', mySchema );