import eslint from "@eslint/js";

export default [
  {
    ignores: ["node_modules/**", ".git/**"]
  },
  eslint.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        Hooks: "readonly",
        canvas: "readonly",
        foundry: "readonly",
        game: "readonly"
      }
    },
    rules: {
      "no-undef": "error",
      "no-unused-vars": ["warn", {"args": "none"}]
    }
  }
];