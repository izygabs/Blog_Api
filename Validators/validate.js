const Joi = require("joi");

const registration = (data) => {
  const schema = Joi.object({
    userName: Joi.string().required().trim().min(6).max(10),
    password: Joi.string().required().trim().min(8).max(12),
  });
  return schema.validate(data);
};

module.exports.registration = registration;
