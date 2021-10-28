const express = require('express');
const app = express();
const connect = require('./config/db')
app.use(express.json())
const usersController = require('./controllers/user.controller')
const paymentController = require('./controllers/payment.controller')
const moviesController = require('./controllers/movies.controller')
const musicController = require('./controllers/music.controller')
const seriesController = require('./controllers/series.controller')
app.use('/users', usersController)

app.use("/movies", moviesController);
app.use("/series", seriesController);
app.use("/musics", musicController);
app.use("/payments", paymentController);

app.listen(2345, async function () {
    await connect();
    console.log('listening on port 2345');
})