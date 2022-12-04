const CracoSwcPlugin = require('craco-swc')
const { CracoAliasPlugin } = require('react-app-alias')
const { URL } = require('url')

const { ProvidePlugin } = require('webpack')

const isDevelopment = process.env.NODE_ENV === 'development'
/**
 * @type {import('@craco/craco/dist/types/config').CracoConfig}
 */
module.exports = {
  webpack: {
    plugins: {
      add: [
        new ProvidePlugin({
          'window.store': 'store2',
          store: 'store2',
        }),
      ],
    },
  },
  plugins: [
    {
      plugin: CracoSwcPlugin,
      options: {
        swcLoaderOptions: {
          parseMap: true,
          jsc: {
            externalHelpers: true,
            target: 'es2022',
            parser: {
              syntax: 'typescript',
              jsx: true,
              tsx: true,
              dynamicImport: true,
              exportDefaultFrom: true,
              topLevelAwait: true,
              importMeta: true,
              preserveAllComments: true,
              keepClassNames: true,
            },
            transform: {
              react: {
                refresh: process.env.NODE_ENV === 'development',
                runtime: 'automatic',
                importSource: '@emotion/react',
                pragma: 'jsx',
                pragmaFrag: 'Fragment',
              },
              legacyDecorator: true,
            },
            experimental: {
              plugins: [
                [
                  '@swc/plugin-emotion',
                  {
                    // default is true. It will be disabled when build type is production.
                    sourceMap: true,
                    // default is 'dev-only'.
                    autoLabel: 'dev-only',
                    // default is '[local]'.
                    // Allowed values: `[local]` `[filename]` and `[dirname]`
                    // This option only works when autoLabel is set to 'dev-only' or 'always'.
                    // It allows you to define the format of the resulting label.
                    // The format is defined via string where variable parts are enclosed in square brackets [].
                    // For example labelFormat: "my-classname--[local]", where [local] will be replaced with the name of the variable the result is assigned to.
                    // labelFormat: string,
                  },
                ],
              ],
            },
          },
        },
      },
    },
    {
      plugin: CracoAliasPlugin,
      options: {},
    },
  ],
  devServer: (devServerConfig, _) => {
    var proxyApi = process.env.REACT_APP_API_PROXY

    const { hostname } = new URL(proxyApi)

    devServerConfig.proxy = {
      context: [
        '/v1/graphql',
        '/v2/graphql',
        '/api/render',
        '/api/login',
        '/api/logout',
        '/api/user/me',
      ],
      target: proxyApi,
      changeOrigin: true,
      withCredentials: true,
      secure: true,
      cookieDomainRewrite: {
        localhost: hostname,
        [hostname]: 'localhost',
      },
    }

    return devServerConfig
  },
}
