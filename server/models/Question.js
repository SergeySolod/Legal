const {Schema, model} = require('mongoose');

const QuestionSchema = new Schema ({
    title: {type: String, required: true},
    text: {type: String, required: true},
    date: {type: Date, default: Date.now}
  }
)

module.exports = model('Question', QuestionSchema)