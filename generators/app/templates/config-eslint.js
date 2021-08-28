module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:sonarjs/recommended",
    "plugin:unicorn/recommended",
  ],
  plugins: ["@typescript-eslint", "sonarjs", "unicorn"],
  rules: {
    "no-console": "error",
    "no-template-curly-in-string": "error",
    "unicorn/filename-case": "off",
    "unicorn/no-process-exit": "off",
  },
};
