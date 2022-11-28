// importing express
const express = require('express');
const userRouter = require('./routers/userRouter');
const MusicRouter = require('./routers/MusicRouter');
const util = require('./routers/utils');
const cors = require('cors');

// initiliazing express
const app = express();

const port = 5000;

// middleware
// this will parse JSON data to javaScript
app.use(express.json());
app.use(cors( { origin : [ 'http://localhost:3000' ] } ));

app.use('/user', userRouter);
app.use('/music', MusicRouter);
app.use('/util', util);

app.use(express.static('./static/uploads'));

// route
app.get( '/', (req, res) => {
    res.send('Response from express');
})

// route or endpoint
app.get( '/home', (req, res) => {
    res.send('Response from home');
})



app.listen( port, () => {
    console.log('server has started');
});