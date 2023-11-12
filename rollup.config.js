import resolve  from 'rollup-plugin-node-resolve'
import postcss  from 'rollup-plugin-postcss'
import {terser} from 'rollup-plugin-terser'
import typescript from '@rollup/plugin-typescript';

const is_prod = process.env.build === 'prod'

const dev_plugins = [
  resolve({
    jsnext: true,
  }),
  postcss({
    extract: false,
    inject:  false,
  }),
]

const prod_plugins = [
  terser({
    sourcemap: false,
  }),
  typescript(),
]

const plugins = is_prod
  ? [...dev_plugins, ...prod_plugins]
  : dev_plugins

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    // file:       is_prod ? 'src/bundle.min.js' : 'src/bundle.js',
    format:     'es',
    sourcemap:  is_prod ? null : 'inline',
  },
  plugins,
  watch: {
    exclude: ['node_modules/**'],
  }
}