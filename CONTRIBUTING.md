# Contributing

The document outlines the development process of
**generator-typescript-best-practices**.

## Setting up the development environment

Start by cloning the repository and inside the root folder do `npm link`.

The generator can then be run using

```sh
npx yo typescript-best-practices
```

## Release procedure

This project uses [semver](https://semver.org/), handled by the NPM package
[standard-version](https://www.npmjs.com/package/standard-version). For creating
a new release, run the following commands:

```sh
npm run release
git push --follow-tags origin main
```
