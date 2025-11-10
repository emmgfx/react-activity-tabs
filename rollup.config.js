import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import preserveDirectives from "rollup-plugin-preserve-directives";

export default [
  {
    input: "./src/index.jsx",
    output: [
      {
        dir: "dist/cjs/",
        format: "cjs",
        sourcemap: true,
        preserveModules: true,
      },
      {
        dir: "dist/es/",
        format: "es",
        exports: "named",
        sourcemap: true,
        preserveModules: true,
      },
    ],
    plugins: [
      external(),
      resolve({ extensions: [".js", ".jsx"] }),
      commonjs(),
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**",
        presets: [
          [
            "@babel/preset-react",
            { runtime: "automatic", importSource: "react" },
          ],
        ],
        extensions: [".js", ".jsx"],
      }),
      preserveDirectives({ suppressPreserveModulesWarning: true }),
      terser(),
    ],
    onwarn(warning, warn) {
      if (warning.code !== "MODULE_LEVEL_DIRECTIVE") {
        warn(warning);
      }
    },
  },
];
