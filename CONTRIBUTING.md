# Contributing to ReactJS Media Player

Thanks for contributing to ReactJS Media Player!

Running the demo locally is relatively easy:

```bash
git clone https://github.com/soyvillareal/reactjs-media-player.git
cd react-player
npm install # or yarn
npm start
open http://localhost:3000
```

## `dist` files

There is **no need** to build or commit files in `dist` after making changes. The `dist` files are only there for [bower](http://bower.io) support, and there is very little point in polluting every commit or pull request with the changes. The `dist` files will be automatically built and committed when new versions are released, so your changes will be included then.

## Linting

This project uses [standard](https://github.com/eslint/eslint) code style. Be sure to lint the code after making changes and fix any issues that come up.

```bash
npm run lint
```

## Testing

This project uses [Jest](https://github.com/jestjs/jest) with [React Testing Library](https://github.com/testing-library/react-testing-library) and [ESBuild Jest](https://github.com/aelbore/esbuild-jest) for testing in the browser. Be sure to test `ReactJS Media Player` after making changes and, if you’re feeling generous, add some tests of your own.

```bash
npm test
```
