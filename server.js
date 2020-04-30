const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/monggoHeadlines'

//const routes = require('./routes/');

//const compression = require('compression');
const PORT = process.env.PORT || 3000;
const app = express();
//const database = 'workout_db';
app.use(logger("dev"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

app.use(require('./routes/api-routes'));
app.use(require('./routes/html-routes'));







app.listen(PORT, ()=>{
    console.log(`app running on port ${PORT}!`)
})
