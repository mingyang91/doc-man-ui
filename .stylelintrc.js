module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
  ],
  rules: {
    'font-family-name-quotes': null,
    'font-family-no-missing-generic-family-keyword': null,
    'string-quotes': 'single',
    'max-nesting-depth': [
      2,
      {
        ignore: ['blockless-at-rules', 'pseudo-classes'],
      },
    ],
    'max-line-length': 100,
    'declaration-block-no-duplicate-properties': true,
    'no-duplicate-selectors': true,
    'no-descending-specificity': null,
    'selector-class-pattern': '^([a-z][a-z0-9]*)((-|__)[a-z0-9]+)*$',
    'value-no-vendor-prefix': [true, { ignoreValues: ['box'] }],
  },
}
