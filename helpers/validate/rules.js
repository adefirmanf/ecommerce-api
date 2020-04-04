module.exports = {
  required: (rules = 'string') => `required|${rules}`,
  string: () => `string`,
  email: () => `email|`,
  min: (min) => `min:${min}|`,
  max: (max) => `max:${max}|`,
  url: () => `url|`
}
