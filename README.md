# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
`npx create-react-app react-app --template typescript`

## Prettier

```shell
npm install --save-dev --save-exact prettier

cat <<END > .prettierrc.json
{
  "singleQuote": true,
  "printWidth": 120
}
END

cat <<END > .prettierignore
node_modules
package-lock.json
coverage
.parcel-cache
dist
.idea
.vscode
build
END

mkdir .vscode
cat <<END > .vscode/settings.json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
END
```

```
# package.json
# scripts:
+ "format:check": "prettier --check .",
+ "format": "prettier --write .",
```

## ESLint

```shell
npm init @eslint/config
# problems esm react TypeScript browser JSON
npm i -D eslint-config-prettier eslint-plugin-prettier
```

```json5
// .eslintrc.json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    // "plugin:react/recommended",
    "react-app",
    // "react-app/jest",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    // "react",
    "@typescript-eslint",
    "prettier"
  ],
  "rules": {}
}
```

```
# package.json

- eslintConfig

# scripts:
+ "lint": "eslint src --ext .js,.jsx,.ts,.tsx",
+ "lint:fix": "eslint src --fix --ext .js,.jsx,.ts,.tsx",
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
