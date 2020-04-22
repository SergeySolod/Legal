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

app.post('/customer', (req, res) => {

  const data = req.body;

  const customer = new CustomerModel({
    name: data.name,
    description: data.description,
  });

  customer.save().then(() => {
    res.send({ status: 'ok' })
  })
});

app.get('/customers', (req, res) => {
  CustomerModel.find().then((err, customers) => {
    if (err) {
      res.send(err);
    }
    res.json(customers);
  })
})

app.delete('/customers/:id', (req, res) => {
  CustomerModel.remove({
    _id: req.params.id
  }).then(customer => {
    if (customer) {
      res.json({ status: 'deleted' })
    } else {
      res.json({ status: 'error' })
    }
  })
})

app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))


