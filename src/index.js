const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const path = require('path');

const api = require('./api');
const config = require('./config');

const app = express();

mongoose.connect(config.MONGO_URI, { useNewUrlParser : true })
    .then(() => console.log('Connected to MongoDB!'))
    .catch(err => { 
        console.log(err)
        process.exit(1)
    });

app.use(bodyParser.json());

app.use('/api', api);

let port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Listening on port ${port}!`));
