module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    ignorePatterns: [
        "webpack*config.js",
        "dist/**"
    ],
    parser: "@typescript-eslint/parser",
    plugins: [
        "@typescript-eslint",
    ],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    rules: {
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/no-non-null-assertion": 0,
    }
};
