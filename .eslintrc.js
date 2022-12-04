module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@emotion', 'react', 'react-hooks'],
  extends: [
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  rules: {
    'comma-dangle': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/react-in-jsx-scope': 'off',
    'multiline-ternary': 'off',
    'no-unused-vars': 'off',
    'sort-imports': 'off',
    'no-use-before-define': 'off',
    'space-before-function-paren': 'off',
    '@typescript-eslint/ban-types': 'warn',
    '@typescript-eslint/no-explicit-any': [
      'warn',
      {
        fixToUnknown: false,
        ignoreRestArgs: true,
      },
    ],
  },
  overrides: [
    {
      files: ['src//models/**/*.ts?(x)'],
      rules: {
        '@typescript-eslint/no-unused-vars': ['off'],
      },
    },
    {
      files: ['src/**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
        },
      },
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:import/typescript',
      ],
      rules: {
        'default-case': 'off',
        'no-dupe-class-members': 'off',
        'no-undef': 'off',
        '@typescript-eslint/consistent-type-assertions': 'warn',
        'no-array-constructor': 'off',
        'no-redeclare': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [
          'warn',
          {
            functions: false,
            classes: false,
            variables: false,
            typedefs: false,
          },
        ],
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': [
          'error',
          {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: true,
          },
        ],
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            args: 'none',
            ignoreRestSiblings: true,
          },
        ],
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'warn',
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: ['**/__tests__/**', '**/*.test.*'],
          },
        ],
        'import/order': [
          'warn',
          {
            pathGroups: [
              {
                pattern: 'react|react-dom|react-router-dom|react-helmet-async',
                group: 'builtin',
                position: 'before',
              },
              {
                pattern: 'notistack|(@tanstack/react-query)|nprogress|ahooks',
                group: 'external',
                position: 'before',
              },
              {
                pattern: '(@mui/*)|mui-rff|react-final-form',
                group: 'builtin',
                position: 'after',
              },
              {
                pattern: '@/**',
                position: 'after',
                group: 'external',
              },
              {
                pattern: 'd/**',
                group: 'external',
                position: 'after',
              },
              {
                pattern: 'com/**',
                group: 'external',
                position: 'after',
              },
              {
                pattern: 'ctx/**',
                group: 'external',
                position: 'after',
              },
              {
                pattern: 'u/**',
                group: 'external',
                position: 'after',
              },
              {
                pattern: 'h/**',
                group: 'external',
                position: 'after',
              },
              {
                pattern: 'm/**',
                group: 'external',
                position: 'after',
              },
              {
                pattern: './**',
                group: 'parent',
              },
              {
                pattern: '../**',
                group: 'parent',
              },
            ],
            pathGroupsExcludedImportTypes: ['react'],
            'newlines-between': 'always',
          },
        ],
      },
    },
    {
      files: ['*.test.ts(x)?', '__test__/**/*.ts?(x)'],
      env: {
        jest: true,
      },
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
    },
    {
      files: ['*.cjs', '*.cts', 'craco.config.js', 'commitlint.config.js'],
      env: {
        commonjs: true,
      },
    },
    {
      files: ['*.graphql'],
      parser: '@graphql-eslint/eslint-plugin',
      parserOptions: {
        operations: './src/graphql/**/*.graphql',
      },
      plugins: ['@graphql-eslint'],
      rules: {
        '@graphql-eslint/known-type-names': 'error',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/core-modules': ['styled-jsx/css', '^react'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {
        project: './tsconfig.json',
      },
    },
    'import/ignore': ['\\.(com|css|less|sass|scss|json)$'],
    'import/cache': {
      lifetime: 1000,
    },
  },
}
