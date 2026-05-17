import Joi from "joi";
// import { title } from "node:process";

const addJobsSchema=Joi.object({
    title:Joi.string().min(3).max(20).required().messages({
        'string.min':'Kasb minimum 3 ta belgi bolsin',
        'string.max':'Kasb maksimum 20 ta belgi bolishi shart',
        'any.required':'Kasbni kiritilishi shart'
    })
})
const updateJobsSchema=Joi.object({
     title:Joi.string().min(3).max(20).required().messages({
        'string.min':'Kasb minimum 3 ta belgi bolsin',
        'string.max':'Kasb maksimum 20 ta belgi bolishi shart',
        'any.required':'Kasbni kiritilishi shart'
   })
 
})

export {
  addJobsSchema,
  updateJobsSchema
}