const DIRECTIVE_PREFIX = 'spc[A-Z]';
const ATTRIBUTE_GROUPS = {
  REGULAR_ATTRIBUTE: `^(?!${DIRECTIVE_PREFIX})[a-zA-Z].*`,
  ANGULAR_DIRECTIVE: `^(${DIRECTIVE_PREFIX}).*`,
  ANGULAR_ATTRIBUTE_BINDING: '^\\[attr\\.',
};

module.exports = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  arrowParens: 'avoid',
  endOfLine: 'lf',
  attributeGroups: [
    '$ANGULAR_ELEMENT_REF',
    '$ANGULAR_STRUCTURAL_DIRECTIVE',
    ATTRIBUTE_GROUPS.ANGULAR_DIRECTIVE,
    ATTRIBUTE_GROUPS.REGULAR_ATTRIBUTE,
    ATTRIBUTE_GROUPS.ANGULAR_ATTRIBUTE_BINDING,
    '$ANGULAR_INPUT',
    '$ANGULAR_TWO_WAY_BINDING',
    '$ANGULAR_OUTPUT',
  ],
  overrides: [
    {
      files: '*.scss',
      options: {
        printWidth: Infinity,
        order: 'alphabetical',
      },
    },
  ],
};
