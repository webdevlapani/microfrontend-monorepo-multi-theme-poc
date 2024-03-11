import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react-swc';
import type { ViteSentryPluginOptions } from 'vite-plugin-sentry';
import viteSentry from 'vite-plugin-sentry';
import { visualizer } from 'rollup-plugin-visualizer';
import { services } from '@azaVista/shared/src/constants/services';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    ...(process.env.CI && process.env.SENTRY // eslint-disable-line turbo/no-undeclared-env-vars
      ? [
          viteSentry({
            authToken: process.env.REACT_APP_SENTRY_TOKEN,
            url: process.env.REACT_APP_SENTRY,
            org: 'azaVista',
            project: 'aza-vista-poc',
            release: '1.0',
            deploy: {
              env: 'production'
            },
            setCommits: {
              auto: true
            },
            sourceMaps: {
              include: ['.'],
              ignore: ['node_modules']
            }
          } as ViteSentryPluginOptions)
        ]
      : [visualizer()])
  ],
  envPrefix: 'REACT_APP_',
  server: {
    // https://vitejs.dev/config/server-options.html
    proxy: {
      '/auth': process.env.REACT_APP_AUTH_API || services.developmentAuth
    }
  },
  define: {
    'process.env': Object.keys(process.env).reduce(
      (accumulator: any, key: string) => {
        if (key.startsWith('REACT_APP_')) {
          accumulator[key] = process.env[key];
        }
        return accumulator;
      },
      {}
    )
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          sentry: ['@sentry/react', '@sentry/tracing']
        }
      }
    }
  },
  resolve: {
    conditions: ['development']
  }
});
