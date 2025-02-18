import Joi from 'joi';

export const clientSchema = Joi.object({
  company_name: Joi.string().min(3).max(100).required()
    .messages({
      "string.min": "O nome da empresa deve ter pelo menos 3 caracteres.",
      "string.max": "O nome da empresa pode ter no máximo 100 caracteres.",
      "any.required": "O nome da empresa é obrigatório."
    }),

  cgc: Joi.string().length(14).pattern(/^\d+$/).required()
    .messages({
      "string.length": "O CGC deve ter exatamente 14 dígitos.",
      "string.pattern.base": "O CGC deve conter apenas números.",
      "any.required": "O CGC é obrigatório."
    }),

  company_fantasy: Joi.string().max(100)
    .messages({
      "string.max": "O nome fantasia pode ter no máximo 100 caracteres."
    }),

  postal_code: Joi.string().length(8).pattern(/^\d+$/).required()
    .messages({
      "string.length": "O CEP deve ter exatamente 8 dígitos.",
      "string.pattern.base": "O CEP deve conter apenas números.",
      "any.required": "O CEP é obrigatório."
    }),

  street: Joi.string().max(100)
    .messages({
      "string.max": "O nome da rua pode ter no máximo 100 caracteres."
    }),

  street_number: Joi.string().max(10)
    .messages({
      "string.max": "O número do endereço pode ter no máximo 10 caracteres."
    }),

  neighborhood: Joi.string().max(50)
    .messages({
      "string.max": "O bairro pode ter no máximo 50 caracteres."
    }),

  city: Joi.string().max(50).required()
    .messages({
      "string.max": "A cidade pode ter no máximo 50 caracteres.",
      "any.required": "A cidade é obrigatória."
    }),

  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org', 'br'] } }).required()
    .messages({
      "string.email": "O e-mail informado não é válido.",
      "any.required": "O e-mail é obrigatório."
    }),

  phone_number: Joi.string().pattern(/^\d{10,11}$/)
    .messages({
      "string.pattern.base": "O telefone deve conter 10 ou 11 dígitos (com DDD)."
    }),

  notes: Joi.string().max(500)
    .messages({
      "string.max": "As observações podem ter no máximo 500 caracteres."
    }),
});
