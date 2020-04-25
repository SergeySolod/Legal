const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const config = require('config')
const CustomerModel = require('./models/Question')


const app = express();

//преобразование приходящих данных в json формат встроенным в express методом
app.use(express.json({extended: true}))

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/questions', require('./routes/questions.routes'))

// app.use(function (req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   next();
// });

const PORT = config.get('port') || 5000

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
    } catch (e) {
        process.exit(1)
    }
}

start()

// app.post('/customer', (req, res) => {
//
//   const data = req.body;
//
//   const customer = new CustomerModel({
//     name: data.name,
//     description: data.description,
//   });
//
//   customer.save().then(() => {
//     res.send({ status: 'ok' })
//   })
// });
//
// app.get('/customers', (req, res) => {
//   CustomerModel.find().then((err, customers) => {
//     if (err) {
//       res.send(err);
//     }
//     res.json(customers);
//   })
// })
//
// app.delete('/customers/:id', (req, res) => {
//   CustomerModel.remove({
//     _id: req.params.id
//   }).then(customer => {
//     if (customer) {
//       res.json({ status: 'deleted' })
//     } else {
//       res.json({ status: 'error' })
//     }
//   })
// })
//
// app.put('/customers/:id', (req, res) => {
//   CustomerModel.findByIdAndUpdate(req.params.id, {$set: req.body}, (err) => {
//     if (err) {
//       res.send(err)
//     }
//     res.json({ status: 'updated' })
//   })
// })



