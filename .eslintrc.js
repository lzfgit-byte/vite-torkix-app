module.exports = {
    root: true,
    env: {
        node: true,
        es6: true,
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:prettier/recommended',
        'plugin:vue/essential',
    ],
    plugins: ['@typescript-eslint'],
    rules: {
        'prettier/prettier': 'error',
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off',
        'no-debugger': 'off',
        'no-unused-vars': 1,
        'vue/no-multiple-template-root': 'off',
    },
};
