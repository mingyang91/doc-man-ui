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
      'http://ec2-18-162-62-84.ap-east-1.compute.amazonaws.com:9000/v1/graphql':
        {
          headers: {
            'x-hasura-admin-secret': env.VITE_HASURA_ADMIN_SECRET,
          },
        },
    },
  ],
  documents: ['src/graphql/**/*.graphql'],
  overwrite: true,
  generates: {
    './src/generated/graphql-origin.ts': {
      plugins: [
        'typescript',
        'named-operations-object',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        namingConvention: {
          typeNames: 'change-case-all#pascalCase',
          enumValues: 'change-case-all#upperCase',
        },
        // maybeValue:
        //   'T extends PromiseLike<infer U> ? Promise<U | null> : T | null',
        skipTypename: true,
        withHooks: true,
        withHOC: false,
        withComponent: false,
        defaultScalarType: 'unknown',
        useImplementingTypes: true,
        nonOptionalTypename: true,
        declarationKind: {
          type: 'interface',
        },
      },
    },
    './src/generated/graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
  afterAllFileWrite: ['pnpm exec eslint --fix  ./src/generated/graphql.ts'],
}
