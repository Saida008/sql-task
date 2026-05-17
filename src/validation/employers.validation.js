
import Joi from "joi"

const addEmployerSchema = Joi.object({
  name: Joi.string().min(5).max(15).required().messages({
    'string.min': 'Ism minimum 5 ta belgidan iborat bolsin',
    'string.max': 'Ism maximum 15 ta belgidan iborat bolsin',
    'any.required': 'Ism kiritilishi majburiy'
  }),

  degree: Joi.string().min(5).max(30).required().messages({
    'string.min': 'Daraja kamida 5 ta belgi bolishi shart',
    'string.max': 'Darajada maximum 30 ta belgi bolishi shart',
    'any.required': 'Kiritish majburiy'
  }),

  salary: Joi.number().positive().required().messages({
    'number.positive': 'Oylik ish haqi musbat bolishi shart',
    'any.required': 'Kiritilishi majburiy'
  }),

  job_id: Joi.number().integer().required().messages({
    'number.integer': 'Job id son bolishi shart',
    'any.required': 'Job id majburiy'
  })
})

const updateEmployerSchema = Joi.object({
  name: Joi.string().min(5).max(15).required().messages({
    'string.min': 'Ism minimum 5 ta belgidan iborat bolsin',
    'string.max': 'Ism maximum 15 ta belgidan iborat bolsin',
    'any.required': 'Ism kiritilishi majburiy'
  }),

  degree: Joi.string().min(5).max(30).required().messages({
    'string.min': 'Daraja kamida 5 ta belgi bolishi shart',
    'string.max': 'Darajada maximum 30 ta belgi bolishi shart',
    'any.required': 'Kiritish majburiy'
  }),

  salary: Joi.number().positive().required().messages({
    'number.positive': 'Oylik ish haqi musbat bolishi shart',
    'any.required': 'Kiritilishi majburiy'
  }),

  job_id: Joi.number().integer().required().messages({
    'number.integer': 'Job id son bolishi shart',
    'any.required': 'Job id majburiy'
  })
})

export {
  addEmployerSchema,
  updateEmployerSchema
}