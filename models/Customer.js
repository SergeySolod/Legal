const {Schema, model} = require('mongoose');

const CustomerSchema = new Schema (
  {
    name: String,
    description: String,
    imageUrl: String
  },
  {
    timestamps: true
  }
)