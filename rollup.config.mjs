import { babel } from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import eslint from '@rollup/plugin-eslint';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import ts from 'rollup-plugin-ts';
import copy from 'rollup-plugin-copy';
import styles from 'rollup-plugin-styles';
require('dotenv').config();

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist/esm',
      format: 'esm',
      preserveModules: true,
    },
    {
      dir: 'dist/cjs',
      format: 'cjs',
    },
  ],
  plugins: [
    eslint({
      include: '**/*.js',
      throwOnError: true,
    }),
    ts(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
    resolve({
      browser: true,
      alias: {
        '@breww-spyer/animator': './src/Animation/Animate-css/Style/index.js',
      },
    }),
    copy({
      targets: [
        { src: 'src/*.css', dest: 'dist/style' },
      ],
    }),
    commonjs(),
    json(),
    terser(),
    styles({
      mode: 'extract',
      minimize: true,
      sourceMap: false,
      url: { inline: false },
      modules: false,
      autoModules: true,
      emitFiles: true,
      modulesFileName: 'styles.css',
      sass: false,
      less: false,
      stylus: false,
    }),
  ],
};
