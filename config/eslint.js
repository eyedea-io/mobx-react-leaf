const path = require('path');

module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: 'airbnb',
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
    jest: true,
  },
  plugins: [
    'react',
    'jsx-a11y',
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      generators: true,
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    'arrow-body-style': [
      2,
      'as-needed',
    ],
    'comma-dangle': [
      2,
      'always-multiline',
    ],
    'import/imports-first': 0,
    'import/newline-after-import': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 2,
    'import/prefer-default-export': 0,
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    'jsx-a11y/aria-props': 2,
    'jsx-a11y/heading-has-content': 0,
    'jsx-a11y/href-no-hash': 2,
    'jsx-a11y/label-has-for': 2,
    'jsx-a11y/mouse-events-have-key-events': 2,
    'jsx-a11y/role-has-required-aria-props': 2,
    'jsx-a11y/role-supports-aria-props': 2,
    'max-len': 0,
    'newline-per-chained-call': 0,
    'no-console': 1,
    'no-nested-ternary': 0,
    'no-use-before-define': 0,
    'prefer-template': 2,
    'react/jsx-first-prop-new-line': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-no-target-blank': 0,
    'react/require-extension': 0,
    'react/prefer-stateless-function': 0,
    'react/self-closing-comp': 0,
    'require-yield': 0,
  },

  settings: {
    'import/ignore': [
      'config',
      'scripts',
      'node_modules',
      '\\.(json|css|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm)$',
    ],
    'import/resolver': {
      webpack: {
        config: path.join(__dirname, 'webpack.config.dev.js'),
      },
    },
  },
};
