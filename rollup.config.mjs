import { babel } from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';
import eslint from '@rollup/plugin-eslint';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import ts from 'rollup-plugin-ts';
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
    }),
    styles(),
    commonjs(),
    json(),
    dynamicImportVars({}),
    terser(),
    
  ],
};
