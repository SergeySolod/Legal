const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const config = require('config')

const app = express();
mongoose.connect('mongodb+srv://Sergey:pvfaty3z@cluster0-noqua.mongodb.net/LegalSystem?retryWrites=true&w=majority');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = config.get('port') || 5000

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
  } catch (e) {
    process.exit(1)
  }
}

start()

app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))