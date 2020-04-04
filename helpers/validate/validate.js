const validator = require('validatorjs')

module.exports = {
  validate: (data, object) => {
    const validate = new validator(data, object)
    if (validate.passes()) {
      return data
    } else {
      throw new Error(JSON.stringify(validate.errors.all()))
    }
  },
}