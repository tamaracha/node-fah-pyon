'use strict'
module.exports = {
  '*.{json,yml,yaml}': 'prettier --write',
  '*.md': 'markdownlint-cli2-fix',
  '(config|lib)/**/*.?(c|m)js': ['prettier --write', 'standard --fix']
}
