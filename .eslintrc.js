/**
 * These rules enforce the Hack Reactor Style Guide
 *
 * Visit this repo for more information:
 *   https://github.com/reactorcore/eslint-config-hackreactor
 */

module.exports = {
  extends: "airbnb",
  rules: {
    "no-console": ["error", { allow: ["warn", "error"] }],
  },
  env: {
    browser: true,
    jest: true,
    node: true,
  },
};