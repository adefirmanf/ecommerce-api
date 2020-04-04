const { check, rules } = require('.')
const assert = require('assert')

describe("Validator test", () => {
  it("Should pass when property is exist", () => {
    const user = {
      username: "johndoe",
      password: "secret"
    }
    const rule = {
      username: rules.required(),
      password: rules.required()
    }
    check.validate(user, rule)
  })
  it("Should fail some property is missing", () => {
    const user = {}
    const rule = {
      username: rules.required(),
      password: rules.required()
    }
    assert.throws(() => check.validate(user, rule), /Error/)
  })
})