import * as Joi from "joi";

const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Question', {
  question: Joi.string().required(),
  image: Joi.string(),
  video: Joi.string(),
  quizId: Joi.number().required(),
})
