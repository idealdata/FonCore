import typescript from "rollup-plugin-typescript2";
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: "lib/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
    },
  ],
  plugins: [typescript(), commonjs()],
  external: ["axios"],
};
