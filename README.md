# generator-typescript-best-practices

**generator-typescript-best-practices** is a [Yeoman](http://yeoman.io/)
generator for creating a TypeScript project with strict linting. This includes
the following

- [commitlint](https://commitlint.js.org) to enforce
  [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [husky](https://www.npmjs.com/package/husky) for handling Git hooks. The
  following hooks are installed:
  - pre-commit hook for formatting staged code and verifying that commit
    messages adheres to conventional commits
  - pre-push hook for running linting and verifying test coverage
- [Prettier](https://prettier.io/) for formatting
  - [import-sort](https://github.com/renke/import-sort) for sorting imports as
    part of formatting process
- [Eslint](https://eslint.org/) for linting
  - [eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs)
    for code analysis as part of linting
  - [eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn)
    for powerful linting rules
  - TypeScript parser for allowing Eslint to parse TypeScript
- [lint-staged](https://www.npmjs.com/package/lint-staged) for only linting
  staged files to avoid formatting whole project as part of pre-commit hook
- [Standard Version](https://www.npmjs.com/package/standard-version) for
  automated releases
- [TypeScript](https://www.typescriptlang.org/) if not already installed

## Scaffolding a project

Before using this generator, the NPM package must be installed on the local
machine. A global install can be accomplished using

```sh
npm i -g generator-typescript-best-practices
```

To scaffold an existing project, navigate to a TypeScript repository where Git
and NPM already have been initialized and run

```sh
npx yo typescript-best-practices
```

## Contributing

See the [contribution guide](./CONTRIBUTING.md).
