# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Migrated to Husky v6

### Fixed

- Updated dev dependencies
- Fixed security vulnerabilities

## [1.4.5] - 2021-01-04

### Fixed

- Added missing grammar export to type declaration file

## [1.4.4] - 2020-12-28

### Fixed

#### Outdated build deps

- Updated to latest version of standard which understands ESM
  and removed babel-eslint
- Replaced nyc and tap-nyc with c8
  which uses Node.JS' built-in functionality for code coverage
- Uses shx for more platform-independent  scripts (substitutes del-cli)

## [1.4.3] - 2020-04-26

### Fixed

- PyON message name in the header may contain letters and dashes

## [1.4.2] - 2020-04-18

### Changed

- SafeLoad behavior is unified:
  Returns a message of type empty, if parser results are undefined.
  This can happen if an empty string was passed
  or if the parser got only a partial PyON string.

## [1.4.1] - 2020-04-18

### Changed

- safeLoad trims the input string before it tries to parse it.

## [1.4.0] - 2020-04-18

### Added

- wrapper module for ESM exports

### Changed

- migrated from antlr to nearley with moo lexer
- strings are not trimmed by load function anymore

## [1.3.0] - 2020-04-16

### Added

- Publish package archives in github releases, containing only necessary files
- CHANGELOG file

### Changed

- exclude antlr-generated files from git repo
- Convert unit tests to ava
- Use [Javascript Standard Style](https://github.com/standard/standard)
  for code linting and formatting.

[Unreleased]: https://github.com/tamaracha/node-fah-pyon/compare/v1.4.5...HEAD
[1.4.5]: https://github.com/tamaracha/node-fah-pyon/compare/v1.4.4...v1.4.5
[1.4.4]: https://github.com/tamaracha/node-fah-pyon/compare/v1.4.3...v1.4.4
[1.4.3]: https://github.com/tamaracha/node-fah-pyon/compare/v1.4.2...v1.4.3
[1.4.2]: https://github.com/tamaracha/node-fah-pyon/compare/v1.4.1...v1.4.2
[1.4.1]: https://github.com/tamaracha/node-fah-pyon/compare/v1.4.0...v1.4.1
[1.4.0]: https://github.com/tamaracha/node-fah-pyon/compare/v1.3.0...v1.4.0
[1.3.0]: https://github.com/tamaracha/node-fah-pyon/compare/v1.2.0...v1.3.0
<!-- markdownlint-configure-file { "MD024": { "siblings_only": true }} -->
