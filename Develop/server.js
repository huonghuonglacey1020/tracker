const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
//const route = require('./Develop/route');
//const compression = require('compression');
const PORT = process.env.PORT || 3000;
const app = express();
//const database = 'tracker_db';
app.use(logger("dev"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/tracker_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
app.use(require('./routes/api-routes'));
app.use(require('./routes/html-routes'));







app.listen(PORT, ()=>{
    console.log(`app running on port ${PORT}!`)
})
