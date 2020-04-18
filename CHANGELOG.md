# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
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
- Use [Javascript Standard Style](https://github.com/standard/standard) for code linting and formatting.

[Unreleased]: https://github.com/tamaracha/node-fah-pyon/compare/v1.4.1...HEAD
[1.4.1]: https://github.com/tamaracha/node-fah-pyon/compare/v1.4.0...v1.4.1
[1.4.0]: https://github.com/tamaracha/node-fah-pyon/compare/v1.3.0...v1.4.0
[1.3.0]: https://github.com/tamaracha/node-fah-pyon/compare/v1.2.0...v1.3.0
