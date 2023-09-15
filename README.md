# Portfolio 💼

This project contains a portfolio website to showcase my achievements, experience and blogs 🌱.

Currently, this project uses:

- React <img src="./src/assets/react.svg" width=15 height=15 />
- TypeScript <img src="https://pbs.twimg.com/profile_images/1648471227416346625/v84A9gXA_400x400.png" width=15 height=15 />
- Vite <img src="https://vitejs.dev/logo.svg" width=15 height=15/>

## Getting Start

1. Run `yarn` or `npm` to download the dependencies.

2. Run `yarn dev` to start up the webpage locally.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
