// rollup.config.js
import terser from "@rollup/plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import gzipPlugin from 'rollup-plugin-gzip'
import preserveDirectives from "rollup-plugin-preserve-directives";


import pkg from "./package.json" assert { type: "json" };

export default [
  {
    input: "src/index.ts",
    output: [ 
      {
        dir: './dist',
        format: "esm",
        sourcemap: true,
      },
    ],
    onwarn(warning, warn) {
      if (
        warning.code === 'MODULE_LEVEL_DIRECTIVE' &&
        warning.message.includes(`use client`)
      ) {
        return;
      }
      warn(warning);
    },
    plugins: [
      peerDepsExternal(),
      postcss({
        extract: true,
        config: "./postcss.config.js"
      }),
      preserveDirectives({
        supressPreserveModulesWarning: true
      }),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      terser({
        compress: {
          directives: false
        }
      }),
      gzipPlugin()
    ],
  }
];