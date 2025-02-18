import Joi from 'joi'

export const clientSchema = Joi.object({
  code: Joi.string(),
  company_name: Joi.string(),
  cgc: Joi.string(),
  company_fantasy: Joi.string(),
  postal_code: Joi.string(),
  street: Joi.string(),
  street_number: Joi.string(),
  neighborhood: Joi.string(),
  city: Joi.string(),
  email: Joi.string(),
  phone_number: Joi.string(),
  notes: Joi.string(),
  created_at: Joi.date(),
  updated_at: Joi.date()
})
