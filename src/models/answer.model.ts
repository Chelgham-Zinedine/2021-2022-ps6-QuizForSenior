import * as Joi from "joi";

const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Answer', {
  type: Joi.number().required().default(0),
  label: Joi.string().required(),
  correctAnswer: Joi.boolean().required().default(false),
  questionId: Joi.number().required(),
})
