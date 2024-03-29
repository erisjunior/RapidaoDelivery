const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/rapidaoDelivery', { useNewUrlParser: true })
requireDir('./src/models');


app.use('/api', require('./src/routes'));

app.listen(2999);