'use strict'
module.exports = {
  '*.{json,yml,yaml}': 'prettier --write',
  '(lib|config)/**/*.?(m|c)js': files => `standard --fix ${files.join(' ')} | snazzy`
}
