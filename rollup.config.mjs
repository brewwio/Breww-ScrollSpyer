import { babel } from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import eslint from '@rollup/plugin-eslint';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import ts from 'rollup-plugin-ts';
import copy from 'rollup-plugin-copy';
import postcss from 'rollup-plugin-postcss';
import alias from '@rollup/plugin-alias';

require('dotenv').config();

const production = process.env.NODE_ENV === 'production';

export default [
  {
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
        preserveModules: true,
      },
    ],
    plugins: [
      alias({
        entries: [
          { find: '@breww/scroll-spyer', replacement: 'src/index.ts' },
          // Add other aliases as needed
        ],
      }),
      eslint({
        include: '**/*.js',
        throwOnError: true,
      }),
      ts(),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
      }),
      copy({
        targets: [
          { src: 'src/styles/Animate-Css', dest: 'dist/styles' },
        ],
        verbose: true,
        exclude: 'node_modules/**'
      }),
      postcss({
        extract: true,
        minimize: true,
        sourceMap: false,
        plugins: [],
      }),
      commonjs(),
      json(),
      terser(),
    ],
  },
  {
    input: 'src/Animation/Animate-css/AnimateCss.ts',
    output: {
      file: 'dist/browser/animate-css.min.js',
      format: 'iife',
      name: 'AnimateCss',
      // plugins: [terser()],
    },
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
      
      postcss({
        extract: true,
        minimize: true,
        sourceMap: false,
        plugins: [],
      }),
      commonjs(),
      json(),
    ],
  },
  {
    input: 'src/SpyScroller.ts',
    output: {
      file: 'dist/browser/spyscroll.min.js',
      format: 'iife',
      name: 'SpyScroll',
      // plugins: [terser()],
    },
    plugins: [
      eslint({
        include: '**/*.js',
        throwOnError: true,
      }),
      ts(),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**'
      }),     
      postcss({
        extract: true,
        minimize: true,
        sourceMap: false,
        plugins: [],
      }),
      commonjs(),
      json(),
    ],
  },
];
