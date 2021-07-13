import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import replace from 'rollup-plugin-replace';
import typescript from '@rollup/plugin-typescript';
import serve from 'rollup-plugin-serve'

import postcss from 'rollup-plugin-postcss';
import cssnano from 'cssnano';

const extensions = [
  '.js', '.jsx', '.ts', '.tsx',
];

export default {
  input: './src/client/index.tsx',
  output: {
    dir: './public',
    sourcemap: true,
    format: 'es'
  },
  plugins: [
    commonjs(),
    typescript(),
    replace({
      'process.env.NODE_ENV': process.env.NODE_ENV || JSON.stringify('production'),
    }),
    babel({
      extensions,
      exclude: 'node_modules/**',
      babelrc: false,
      babelHelpers: 'bundled',
      presets: [
        '@babel/preset-typescript',
        '@babel/preset-react',
        [
          '@babel/preset-env',
          {
            targets: {
              browsers: ['> 1%', 'not IE 11', 'not dead']
            },
            "useBuiltIns": "entry",
            "corejs": 3
          }
        ]
      ],
      // plugins: ['@babel/plugin-transform-react-jsx'],
    }),
    postcss({
      use: ['sass'],
      sourceMap: false,
      modules: true,
      extract: false,
      plugins: [
        cssnano(),
      ],
    }),
    resolve({
      browser: true,
    }),
    terser(),
    serve({
      contentBase: 'public',
      port: 3001,
      open: true,
    })
  ],
};
