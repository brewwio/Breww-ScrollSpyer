const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const sass = require('rollup-plugin-sass');
const postcss = require('rollup-plugin-postcss');
const typescript = require('@rollup/plugin-typescript')

const del = require('del');
const terser = require('@rollup/plugin-terser');
const copy = require('rollup-plugin-copy');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = [
  {
    input: 'src/SpyScroller.ts', // Entry point for SpyScroller
    output: [
      {
        file: './dist/esm/SpyScroller.js', // Non-minified version
        format: 'esm',
        name: 'SpyScroller',
        sourcemap: !isProduction,
      },
    
    ],
    plugins: [
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
      }),
      resolve(),
      commonjs(),
      sass({
        insert: true,
      }),
      postcss(),
      typescript({
        tsconfig: './tsconfig.json',
        sourceMap: true,
        outDir: './dist/esm',
      }),
      copy({
        targets: [
          { src: 'node_modules/animate.css/source/attention_seekers/*.css', dest: 'dist/esm/css' },
        ],
      }),
      
    ],
    external: [],
  },
  {
    input: 'src/Animation/Animate-css/AnimateCss.ts', // Entry point for AnimateCss
    output: {
      dir: './dist/esm', // Output folder for AnimateCss
      format: 'es',
    },
    
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
      resolve(),
      commonjs(),
      sass({
        insert: true,
      }),
      postcss(),
      typescript({
        tsconfig: './tsconfig.json',
        sourceMap: true, // Generate source maps
        outDir: './dist/esm', // Update the outDir to be inside the Rollup dir option
      }),
      isProduction && terser(),
    ],
    external: [],
  },
];