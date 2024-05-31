import pluginJs from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ["semi", "error", "always"],
  ["quotes", "error", "single"],
  ["indent", "error", "tab"],
  ["linebreak-style", "error", "unix"],
];
