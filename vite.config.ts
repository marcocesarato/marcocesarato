import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // Generate TypeScript declaration files
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
      tsconfigPath: './tsconfig.json',
    }),
    // Bundle size visualization
    visualizer({
      filename: './dist/stats.html',
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ],

  build: {
    lib: {
      entry: {
        // Main entry point
        index: resolve(__dirname, 'src/index.ts'),
        // Framework wrappers
        react: resolve(__dirname, 'src/framework-wrappers/react/index.tsx'),
        vue: resolve(__dirname, 'src/framework-wrappers/vue/index.ts'),
        angular: resolve(__dirname, 'src/framework-wrappers/angular/index.ts'),
        // Individual component exports for tree-shaking
        'components/button': resolve(__dirname, 'src/components/button/index.ts'),
        'components/card': resolve(__dirname, 'src/components/card/index.ts'),
        'components/input': resolve(__dirname, 'src/components/input/index.ts'),
        'components/modal': resolve(__dirname, 'src/components/modal/index.ts'),
        // Design tokens
        tokens: resolve(__dirname, 'src/tokens/index.ts'),
      },
      name: 'LiquidGlassUI',
      formats: ['es', 'umd'],
      fileName: (format, entryName) => {
        if (entryName === 'index') {
          return format === 'es' ? 'liquid-glass-ui.es.js' : 'liquid-glass-ui.umd.cjs';
        }
        return format === 'es' ? `${entryName}.js` : `${entryName}.umd.cjs`;
      },
    },

    rollupOptions: {
      // Externalize dependencies that shouldn't be bundled
      external: [
        'lit',
        'lit/decorators.js',
        'lit/directives/class-map.js',
        'lit/directives/if-defined.js',
        'lit/directives/style-map.js',
        'react',
        'react-dom',
        'react/jsx-runtime',
        'vue',
        '@angular/core',
        '@lit/react',
      ],
      output: {
        // Global variables for UMD build
        globals: {
          lit: 'Lit',
          react: 'React',
          'react-dom': 'ReactDOM',
          vue: 'Vue',
          '@lit/react': 'LitReact',
        },
        // Preserve module structure for better tree-shaking
        preserveModules: false,
        // Asset file names
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'styles/[name][extname]';
          }
          return 'assets/[name][extname]';
        },
      },
    },

    // Build options
    target: 'es2020',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    sourcemap: true,
    cssCodeSplit: true,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 100,
  },

  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './src/components'),
      '@tokens': resolve(__dirname, './src/tokens'),
      '@utils': resolve(__dirname, './src/utils'),
      '@styles': resolve(__dirname, './src/styles'),
    },
  },

  // Development server configuration
  server: {
    port: 3000,
    open: true,
    cors: true,
  },

  // Optimizations
  optimizeDeps: {
    include: ['lit', 'lit/decorators.js'],
  },
});
