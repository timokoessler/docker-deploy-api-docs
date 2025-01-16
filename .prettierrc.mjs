/** @type {import("prettier").Config} */
export default {
    bracketSameLine: true,
    singleQuote: true,
    tabWidth: 4,
    plugins: ['prettier-plugin-astro'],
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro',
            },
        },
    ],
};
