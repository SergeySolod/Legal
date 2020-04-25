const {Schema, model} = require('mongoose');

const QuestionSchema = new Schema ({
    name: {type: String},
    description: {type: String}
  },
  {
    timestamps: true
  }
)

module.exports = model('Question', QuestionSchema)