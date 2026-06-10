module.exports = [
  ...require("eslint-config-next/core-web-vitals"),
  {
    rules: {
      // TypeScript strictness
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "warn",

      // React best practices
      "react/no-unescaped-entities": "warn",
      "react/jsx-no-target-blank": "error",

      // Import hygiene
      "no-duplicate-imports": "error",

      // Code quality
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "prefer-const": "error",
      "no-var": "error",
    },
  },
];
