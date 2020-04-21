const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const config = require('config')
const CustomerModel = require('./models/Customer')


const app = express();

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

const customer = new CustomerModel({
  name: 'Юлия Смирнова',
  description: 'Потеряла работу из-за коронавируса',
});

customer.save().then(() => {
  console.log('OK!')
})