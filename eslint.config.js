const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');

// Initialize with the necessary configurations
const compat = new FlatCompat({
  recommendedConfig: js.configs.recommended,
  eslintrc: true
});

module.exports = [
  // ✅ Ignore folders
  {
    ignores: ["**/.venv/**"],
  },

  // ✅ Base Recommended
  js.configs.recommended,

  // ✅ Project config
  ...compat.config({
    env: { 
      es2021: true, 
      node: true, 
      jest: true 
    },

    // ✅ Allow k6 globals
    globals: {
      __ENV: "readonly",
    },

    rules: {
      "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "no-console": "off",
      "eqeqeq": ["error", "always"]
    }
  })
];

