module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["plugin:react/recommended", "standard"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        indent: ["error", 4], // Правило: Отступы должны быть равны 4-м
        semi: [2, "always"], // Правило: Добавление ;
        "space-before-function-paren": [
            "error",
            { anonymous: "always", named: "never" },
        ], // Правило: Чтобы небыло пробелов перед Анонимными функциями, а перед Именными были
        quores: ["error", "Double", { allowTemplateLiterals: true }], //  Правило: Разрешается добавление "Двойных ковычек"
    },
};
