const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
mongoose.connect('mongodb+srv://Sergey:pvfaty3z@cluster0-noqua.mongodb.net/LegalSystem?retryWrites=true&w=majority');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const PORT = config.get('port') || 5000

app.listen(5000, () => {
  console.log('SERVER STARTED')
})