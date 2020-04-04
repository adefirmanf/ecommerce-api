const { validate, rule } = require('.')
const assert = require('assert')

describe("Validator test", () => {
  it("Should pass when property is exist", () => {
    const user = {
      username: "johndoe",
      password: "secret"
    }
    const rules = {
      username: rule.required(),
      password: rule.required()
    }
    validate(user, rules)
  })
  it("Should fail some property is missing", () => {
    const user = {}
    const rules = {
      username: rule.required(),
      password: rule.required()
    }
    assert.throws(() => validate(user, rules), /Error/)
  })
})