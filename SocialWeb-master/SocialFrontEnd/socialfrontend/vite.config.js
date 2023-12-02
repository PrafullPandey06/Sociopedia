import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
<<<<<<< HEAD
    port:8889
  },
  esbuild: {
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment'
  },
  // use babel to transpile jsx files
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  rollupInputOptions: {
    plugins: [
      require('@rollup/plugin-babel').default({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
      }),
    ],
  },
=======
    port:6002,
    host: '127.0.0.1'
  }
>>>>>>> c06ee6c2c2b398f1c728fc357db82185feb0e365
})
