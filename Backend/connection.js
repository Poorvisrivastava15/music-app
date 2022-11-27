const mongoose = require('mongoose');

const databaseName = "musicapp";
const url = `mongodb+srv://Poorvisri15:poorvi@cluster0.wts2f9a.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

// connect to database
// async function - returns a promise
mongoose.connect(url)
.then((result) => {
    // console.log(result);
    console.log('connected to database');
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;