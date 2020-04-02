require('dotenv').config({path: __dirname + '/.env'});
const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const config = require("./config/");

const app = express();
const port = process.env.PORT || 3001;

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => { console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err) }
);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

const router = require("./routers/");
app.use('/api', router);

const listener = app.listen(port, () => {
  console.log("Your app is listening on port " + listener.address().port);
});