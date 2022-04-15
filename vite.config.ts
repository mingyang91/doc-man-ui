import { resolve } from 'path'

import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import postcssPresetEnv from 'postcss-preset-env'
import inject from '@rollup/plugin-inject'
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

export default defineConfig(configEnv => {
  const envDir = resolve(__dirname, './env')
  const isDevelopment = configEnv.mode === 'development'
  const env = loadEnv(configEnv.mode, envDir, ['DEV_', 'VITE_'])

  const PORT = Number(env.DEV_PORT || 8888)

  return {
    envDir,
    define: {
      'process.env.NODE_ENV': `"${configEnv.mode}"`,
    },
    plugins: [
      react({
        babel: {
          plugins: [emotionBabel, jotaiDebugLabel, jotaiReactRefresh],
        },
      }),
      tsconfigPaths(),
      inject({
        'window.store': 'store2',
        store: 'store2',
        include: ['*/**/*.js'],
      }),
      legacy({
        targets: browserslist[configEnv.mode],
      }),
      createHtmlPlugin({
        inject: {
          data: {
            sha: gitInfo.hash || '_NO_SHA_',
            tag: gitInfo.tag || '_NO_TAG_',
          },
        },
      }),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        '~': resolve(__dirname, 'node_modules'),
        'store2/src/old': resolve(
          __dirname,
          'node_modules/store2/src/store.old.js'
        ),
        'store2/src/cache': resolve(
          __dirname,
          'node_modules/store2/src/store.cache.js'
        ),
        'store2/src/cookie': resolve(
          __dirname,
          'node_modules/store2/src/store.cookie.js'
        ),
        'store2/src/cookies': resolve(
          __dirname,
          'node_modules/store2/src/store.cookies.js'
        ),
        'store2/src/on': resolve(
          __dirname,
          'node_modules/store2/src/store.on.js'
        ),
        'store2/src/deep': resolve(
          __dirname,
          'node_modules/store2/src/store.deep.js'
        ),
        moment: resolve(__dirname, 'src/utils/replacemoment'),
        'verification-input': resolve(
          __dirname,
          'src/utils/verification-input'
        ),
      },
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
      sourcemap: true,
      rollupOptions: {
        // preserveEntrySignatures: 'allow-extension',
        // preserveModules: true,
        output: {
          manualChunks(id) {
            let match = /vite\/|commonjsHelpers|@babel\//.exec(id)
            if (match) return 'vendor/runtime'

            match =
              /(\/(react|react-dom|react-router(-dom?)|history|scheduler|react\/jsx-runtime)(\/|@?))|(?:@vanilla-extract\/)([\w-]+)/.exec(
                id
              )
            if (match) return 'vendor/core'
            match = /(?:react-icons\/)([\w-]+)/.exec(id)
            if (match && match[1]) return `icons/${match[1]}`
            match = /dayjs/.exec(id)
            if (match) return 'dayjs'
            match = /(?:node_modules\/)([\w\d-_]+)/.exec(id)
            if (match && match[1]) return `vendor/${match[1]}`
            return null
          },
        },
      },
    },
    server: {
      port: PORT,
      host: env.DEV_HOST || '0.0.0.0',
      proxy: {
        '/graphql': {
          target: env.DEV_API_PROXY,
          // secure: true,
          changeOrigin: true,
        },
      },
    },
    optimizeDeps: {
      // disabling Vite from optimizing dependencies before bug fixed
    },
  }
})
