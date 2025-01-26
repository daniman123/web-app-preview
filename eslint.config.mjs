import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  js.configs.recommended,
  ...compat.extends(
    "plugin:storybook/recommended",
    "next",
    "next/core-web-vitals",
    "next/typescript"
  ),
  {
    languageOptions: {
      globals: {
        React: "readonly",
      },
    },

    rules: {
      "no-unused-vars": [
        "error",
        { args: "after-used", argsIgnorePattern: "^_" },
      ],
    },
  },
  ...compat.config({
    overrides: [
      {
        files: ["*.stories.@(ts|tsx|js|jsx|mjs|cjs)"],
        rules: {
          // example of overriding a rule
          "storybook/hierarchy-separator": "error",
        },
      },
    ],
  }),
];

export default eslintConfig;
