import Joi from 'joi';

const joiUser = Joi.object({
  username: Joi.string().min(2).required(),
  classe: Joi.string().min(2).required(),
  level: Joi.number().integer().min(1).required(),
  password: Joi.string().min(8).required(),
});

export default joiUser;