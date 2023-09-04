'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var pluginBabel = require('@rollup/plugin-babel');
var rollupPluginTerser = require('rollup-plugin-terser');
var commonjs = require('@rollup/plugin-commonjs');
var eslint = require('@rollup/plugin-eslint');
var json = require('@rollup/plugin-json');
require('@rollup/plugin-node-resolve');
var ts = require('rollup-plugin-ts');
var copy = require('rollup-plugin-copy');
var postcss = require('rollup-plugin-postcss');
var alias = require('@rollup/plugin-alias');
require('@rollup/plugin-typescript');
var dts = require('rollup-plugin-dts');

require('dotenv').config();

const production = process.env.NODE_ENV === 'production';

var rollup_config = [
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
      pluginBabel.babel({
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
      rollupPluginTerser.terser(),
    ],
  },
  
  {
    input: "src/index.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts.default()],
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
      pluginBabel.babel({
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
    input: 'src/Animation/BrewwAnimation/BrewwAnimations.ts',
    output: {
      file: 'dist/browser/BrewwAnimations.js',
      format: 'iife',
      name: 'BrewwAnimations',
      // plugins: [terser()],
    },
    plugins: [
      eslint({
        include: '**/*.js',
        throwOnError: true,
      }),
      ts(),
      pluginBabel.babel({
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
    input: 'src/Animation/BrewwAnimation/BrewwEasings.ts',
    output: {
      file: 'dist/browser/BrewwEasings.js',
      format: 'iife',
      name: 'BrewwEasings',
      // plugins: [terser()],
    },
    plugins: [
      eslint({
        include: '**/*.js',
        throwOnError: true,
      }),
      ts(),
      pluginBabel.babel({
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
      pluginBabel.babel({
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

exports.default = rollup_config;
