var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_URL: '"https://ftkj.ihehang.com"',
  MOCK: true,
  MOCK_URL: '"http://192.168.1.108:3000/mock/19"',
})
