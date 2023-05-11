
const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const sass = require('rollup-plugin-sass');
const postcss = require('rollup-plugin-postcss');
const typescript = require('@rollup/plugin-typescript');
const del = require('del');
const terser = require('@rollup/plugin-terser');
const isProduction = 'production';

module.exports = [
  {
    input: 'src/SpyScroller.ts', // Entry point for SpyScroller
    output: [
      {
        file: './dist/browser/SpyScroller.js', // Non-minified version
        format: 'es',
        sourcemap: !isProduction,
      },
      {
        file: './dist/browser/min/SpyScroller.min.js', // Minified version
        format: 'es',
        sourcemap: !isProduction,
        plugins: [terser()]
      },
    ],
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
        outDir: 'dist/browser',
      }),
    ],
    external: [],
  },
  {
    input: 'src/Animation/Animate-css/AnimateCss.ts', // Entry point for AnimateCss
    output: {
      dir: './dist/esm', // Output folder for ES module build
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
        tsconfig: './tsconfig.json', // Specify the path to your tsconfig.json file
        outDir: 'dist/esm', // Output directory for TypeScript compilation
      }),
      isProduction && terser(),
    ],
    external: [],
  },
];
