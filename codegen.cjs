const path = require('path')

const { loadEnv } = require('vite')

const env = loadEnv(
  process.env.NODE_ENV === 'development' ? 'development' : 'production',
  path.resolve(__dirname, './env'),
  ['VITE']
)

module.exports = {
  schema: [
    {
      'http://ec2-18-162-155-77.ap-east-1.compute.amazonaws.com:9000/v1/graphql':
        {
          headers: {
            'x-hasura-admin-secret': env.VITE_HASURA_ADMIN_SECRET,
          },
        },
    },
  ],
  documents: ['./src/graphql/**/*.graphql'],
  overwrite: true,
  generates: {
    './src/generated/types.ts': {
      plugins: [
        'typescript',
        'named-operations-object',
        'typescript-operations',
        {
          add: {
            content: '/* eslint-disable @typescript-eslint/no-explicit-any */',
          },
        },
      ],
      config: {
        namingConvention: {
          typeNames: 'change-case-all#pascalCase',
          enumValues: 'change-case-all#upperCase',
        },
        defaultScalarType: 'any',
        useImplementingTypes: true,
        declarationKind: {
          type: 'interface',
        },
      },
    },
    './src/generated/public.ts': {
      preset: 'import-types',
      presetConfig: {
        typesPath: './types',
      },
      plugins: [
        'typescript-react-apollo',
        {
          add: {
            content: '/* eslint-disable @typescript-eslint/no-explicit-any */',
          },
        },
      ],
      config: {
        namingConvention: {
          typeNames: 'change-case-all#pascalCase',
          enumValues: 'change-case-all#upperCase',
        },
        avoidOptionals: true,
        skipTypename: true,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
  },
  afterAllFileWrite: ['pnpm exec eslint --fix  ./src/generated/graphql.ts'],
}
