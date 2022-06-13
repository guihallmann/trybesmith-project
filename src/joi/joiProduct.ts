import Joi from 'joi';

const joiProduct = Joi.object({
  name: Joi.string().required(),
  amount: Joi.string().required(),
});

export default joiProduct;