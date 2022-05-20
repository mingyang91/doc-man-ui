import { resolve } from 'path'

import { defineConfig, loadEnv, Plugin, PluginOption } from 'vite'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
import { viteMockServe } from 'vite-plugin-mock'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import postcssPresetEnv from 'postcss-preset-env'
// import inject from '@rollup/plugin-inject'
import tsconfigPaths from 'vite-tsconfig-paths'
import emotionBabel from '@emotion/babel-plugin'
import jotaiDebugLabel from 'jotai/babel/plugin-debug-label'
import jotaiReactRefresh from 'jotai/babel/plugin-react-refresh'
import { createHtmlPlugin } from 'vite-plugin-html'
import { gitDescribeSync } from 'git-describe'

import { browserslist } from './package.json'

const gitInfo = gitDescribeSync({
  // customArguments: ["--abbrev=16"], // how long in SHA
  match: '[0-9]*', // tag name
})

export default defineConfig(({ mode, command }) => {
  const envDir = resolve(__dirname, './env')
  const isDevelopment = mode === 'development'

  const env = loadEnv(mode, envDir, ['DEV_', 'VITE_'])

  const isMock = env.VITE_MOCK === 'true'

  const PORT = Number(env.DEV_PORT || 8888)

  const plugins: (Plugin | PluginOption[])[] = [
    react({
      babel: {
        plugins: [emotionBabel, jotaiDebugLabel, jotaiReactRefresh],
      },
    }),
    tsconfigPaths(),

    legacy({
      targets: browserslist[mode],
    }),
    createHtmlPlugin({
      inject: {
        data: {
          sha: gitInfo.hash || '_NO_SHA_',
          tag: gitInfo.tag || '_NO_TAG_',
        },
      },
    }),
    viteCommonjs(),
    chunkSplitPlugin({
      strategy: 'default',
    }),
  ]

  if (command === 'serve' && isMock) {
    plugins.push(
      viteMockServe({
        mockPath: './__mocks__',
        localEnabled: true,
      })
    )
  }

  return {
    envDir,
    define: {
      'process.env.NODE_ENV': `"${mode}"`,
    },
    plugins,
    resolve: {
      alias: [
        {
          find: /store2\/src\/(.*)/,
          replacement: resolve(__dirname, 'node_modules/store2/src/$1.js'),
        },
      ],
    },
    css: {
      postcss: {
        map: true,
        modules: true,
        plugins: [
          postcssPresetEnv({
            stage: 2,
          }),
        ],
      },
      modules: {
        generateScopedName: isDevelopment
          ? '[name]__[local]__[hash:base64:5]'
          : '[hash:base64:5]',
      },
    },
    build: {
      sourcemap: isDevelopment,
    },
    server: {
      port: PORT,
      host: env.DEV_HOST || '0.0.0.0',
      proxy: {
        '/v1/graphql': {
          target: env.DEV_API_PROXY,
          changeOrigin: true,
        },
        '/v2/graphql': {
          target: env.DEV_API_PROXY,
          changeOrigin: true,
        },
        '/api/login': {
          target: env.DEV_API_PROXY,
          changeOrigin: true,
        },
        '/api/user/me': {
          target: env.DEV_API_PROXY,
          changeOrigin: true,
        },
      },
    },
    optimizeDeps: {
      // disabling Vite from optimizing dependencies before bug fixed
    },
  }
})
