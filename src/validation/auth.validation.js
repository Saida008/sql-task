import Joi from 'joi'

const authRegisterSchema = Joi.object({
    username: Joi.string().min(3).max(30).required().messages({
        'string.min': 'Username 3 ta belgidan kam bo‘lmasligi kerak',
        'string.max': 'Username maksimum 30 ta belgili bo‘lishi shart',
        'any.required': 'Username kiritish majburiy'
    }),

    email: Joi.string().email().min(5).max(30).required().messages({
        'string.email': 'Email format noto‘g‘ri',
        'string.min': 'Email 5 ta belgidan kam bo‘lmasligi kerak',
        'string.max': 'Email maksimum 30 ta belgili bo‘lishi shart',
        'any.required': 'Email kiritish majburiy'
    }),

    password: Joi.string().min(3).required().messages({
        'string.min': 'Password kamida 3 ta belgidan iborat bo‘lishi kerak',
        'any.required': 'Password majburiy'
    })
})

const authLoginSchema = Joi.object({
    email: Joi.string().email().min(5).max(30).required().messages({
        'string.email': 'Email format noto‘g‘ri',
        'string.min': 'Email 5 ta belgidan kam bo‘lmasligi kerak',
        'string.max': 'Email maksimum 30 ta belgili bo‘lishi shart',
        'any.required': 'Email kiritish majburiy'
    }),

    password: Joi.string().min(3).required().messages({
        'string.min': 'Password kamida 3 ta belgidan iborat bo‘lishi kerak',
        'any.required': 'Password majburiy'
    })
})

export {
    authRegisterSchema,
    authLoginSchema
}