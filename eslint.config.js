import globals from "globals";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactJsx from "eslint-plugin-react/configs/jsx-runtime.js";
import js from "@eslint/js";

export default [
  {
    ignores: ["build/**/*"],
  },
  {
    files: ["**/*.{js,jsx}"],
    ...js.configs.recommended,
    ...pluginReact.configs.flat.recommended,
    ...pluginReact.configs.flat["jsx-runtime"],
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.browser,
      }
    },
    plugins: { 'react-hooks': reactHooks },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react-hooks/config": "error",
      "react-hooks/error-boundaries": "error",
      "react-hooks/component-hook-factories": "error",
      "react-hooks/gating": "error",
      "react-hooks/globals": "error",
      "react-hooks/immutability": "error",
      "react-hooks/preserve-manual-memoization": "error",
      "react-hooks/purity": "error",
      "react-hooks/refs": "error",
      "react-hooks/set-state-in-effect": "error",
      "react-hooks/set-state-in-render": "error",
      "react-hooks/static-components": "error",
      "react-hooks/unsupported-syntax": "warn",
      "react-hooks/use-memo": "error",
      "react-hooks/incompatible-library": "warn"
    }
  }
];