'use strict'
module.exports = {
  '*.{json,yml,yaml}': 'prettier --write',
  '(lib|config)/**/*.js': files => `standard --fix ${files.join(' ')} | snazzy`
}
