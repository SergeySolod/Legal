const {Schema, model} = require('mongoose');

const CustomerSchema = new Schema (
  {
    name: String,
    description: String
  },
  {
    timestamps: true
  }
)

module.exports = model('Customer', CustomerSchema)