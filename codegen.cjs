const path = require('path')

const getClientEnvironment = require('react-scripts/config/env')

const env = getClientEnvironment('/')

const commonConfig = {
  skipTypename: true,
  namingConvention: {
    typeNames: 'change-case-all#pascalCase',
    enumValues: 'change-case-all#upperCase',
  },
  dedupeFragments: true,
  declarationKind: 'interface',
  defaultScalarType: 'any',
  useImplementingTypes: true,
  exportFragmentSpreadSubTypes: true,
  experimentalFragmentVariables: true,
  mergeFragmentTypes: true,
  scalars: {
    json: 'ScalarJson',
    jsonb: 'ScalarJson',
    timestamptz: 'ScalarTz',
    timestamp: 'ScalarTz',
    uuid: 'UUIDV4',
    numeric: 'ScalarNumeric',
    inspectiontype: 'InspectionTypeEnum',
  },
}

module.exports = {
  schema: [
    {
      'http://ec2-18-162-155-77.ap-east-1.compute.amazonaws.com:9000/v1/graphql':
        {
          headers: {
            'x-hasura-admin-secret': env.raw.REACT_APP_HASURA_ADMIN_SECRET,
          },
        },
    },
  ],
  documents: ['./src/models/**/*.graphql'],
  overwrite: true,
  generates: {
    './src/models/types.ts': {
      plugins: [
        'typescript',
        'named-operations-object',
        {
          add: {
            content: '/* eslint-disable @typescript-eslint/no-explicit-any */',
          },
        },
        {
          add: {
            content:
              "import type { ScalarJson, ScalarTz, ScalarNumeric, UUIDV4, InspectionTypeEnum } from 'm/presets';",
          },
        },
      ],
      config: {
        ...commonConfig,
      },
    },
    './src/models/': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.tsx',
        baseTypesPath: 'types',
      },
      plugins: [
        'typescript-operations',
        'typescript-react-query',
        {
          add: {
            content: '/* eslint-disable @typescript-eslint/no-explicit-any */',
          },
        },
        {
          add: {
            content:
              "import type { ScalarJson, ScalarTz, ScalarNumeric, UUIDV4, InspectionTypeEnum } from 'm/presets';",
          },
        },
      ],
      config: {
        ...commonConfig,
        avoidOptionals: {
          field: false,
          inputValue: false,
          object: true,
          defaultValue: true,
        },
        fetcher: {
          func: 'ctx/fetcher#useFetch',
          isReactHook: true,
        },
      },
    },
  },
  hooks: {
    afterAllFileWrite: [
      'pnpm exec prettier --write "src/models/" && pnpm exec eslint --fix --ext .tsx,.ts  "./src/models/"',
    ],
  },
}
