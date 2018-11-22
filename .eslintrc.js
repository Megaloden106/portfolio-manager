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
    "jsx-a11y/label-has-for": [ 2, {
      "components": [ "Label" ],
      "required": {
        "some": [ "nesting", "id" ]
      },
      "allowChildren": false,
    }]
  },
  settings: {
    "import/resolver": "webpack",
  },
  env: {
    browser: true,
    jest: true,
    node: true,
  },
};