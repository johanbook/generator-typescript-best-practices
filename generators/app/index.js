const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  ////////////////////////////////////////////////
  // Install dependencies
  ////////////////////////////////////////////////
  async installCommitLinters() {
    await this.addDevDependencies([
      "@commitlint/cli",
      "@commitlint/config-conventional",
    ]);
    this.fs.copyTpl(
      this.templatePath("config-commitlint.js"),
      this.destinationPath("commitlint.config.js"),
      { title: "Commitlint config" }
    );
  }

  async installFormaters() {
    await this.addDevDependencies(["prettier", "prettier-plugin-import-sort"]);
    this.fs.extendJSON(this.destinationPath("package.json"), {
      scripts: {
        format: "prettier --write '{scripts,src}/**/*.{js,jsx,ts,tsx}'",
      },
    });
  }

  async installLinters() {
    await this.addDevDependencies([
      "eslint",
      "@typescript-eslint/eslint-plugin",
      "@typescript-eslint/parser",
      "eslint-plugin-sonarjs",
      "eslint-plugin-unicorn",
      "import-sort-style-react",
    ]);
    this.fs.extendJSON(this.destinationPath("package.json"), {
      scripts: {
        lint: "eslint 'src/**/*.{js,jsx,ts,tsx}' --max-warnings 0",
      },
    });
  }

  async installHooks() {
    try {
      await this.spawnCommand("git", ["status"], { stdio: "ignore" });
    } catch {
      throw new Error("Project must be a git repository");
    }

    await this.addDevDependencies(["husky", "lint-staged"]);
    this.fs.extendJSON(this.destinationPath("package.json"), {
      scripts: {
        prepare: "husky install",
      },
      "lint-staged": {
        "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": [
          "prettier --write --prose-wrap always",
        ],
      },
    });

    await this.spawnCommand("npx", ["husky", "install"]);
    await this.spawnCommand("npx", [
      "husky",
      "add",
      ".husky/commit-msg",
      "npx --no-install commitlint --edit $1",
    ]);
    await this.spawnCommand("npx", [
      "husky",
      "add",
      ".husky/pre-commit",
      "npx lint-staged",
    ]);
    await this.spawnCommand("npx", [
      "husky",
      "add",
      ".husky/pre-push",
      "npm run lint && npm run test coverage",
    ]);
  }

  async installStandardVersion() {
    await this.addDevDependencies(["standard-version"]);
    this.fs.extendJSON(this.destinationPath("package.json"), {
      scripts: {
        release: "standard-version",
      },
    });
  }

  async installTypescript() {
    await this.addDevDependencies(["typescript"]);
  }

  ////////////////////////////////////////////////
  // Create config files
  ////////////////////////////////////////////////
  createEslintConfig() {
    this.fs.copyTpl(
      this.templatePath("config-eslint.js"),
      this.destinationPath(".eslintrc.js"),
      { title: "Eslint configurations" }
    );
  }

  createTsConfig() {
    this.fs.copyTpl(
      this.templatePath("config-ts.json"),
      this.destinationPath("tsconfig.json"),
      { title: "Typescript configurations" }
    );
  }
};
