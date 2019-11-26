module.exports = {
    extends: [
        'alloy',
        'alloy/typescript',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
        // 禁止使用 var
        'no-var': "error",
        // 优先使用 interface 而不是 type
        '@typescript-eslint/consistent-type-definitions': [
            "error",
            "interface"
        ],
        // "@typescript-eslint/explicit-member-accessibility": "off"
    },
    "rules": {
        "semi": "error"
    },
}