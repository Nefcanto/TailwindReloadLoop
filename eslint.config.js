import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import qwikPlugin from "eslint-plugin-qwik";
import globals from "globals";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
    {
        files: ["src/**/*.ts*"],
        languageOptions: {
            globals: {
                ...globals.node,
            },
            parser: typescriptParser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                ecmaVersion: "latest",
                project: ["./tsconfig.json"],
                sourceType: "module",
                tsconfigRootDir: import.meta.dir,
            },
        },
        plugins: {
            "@typescript-eslint": typescriptPlugin,
            qwik: qwikPlugin,
        },
        rules: {
        },
    },
];
