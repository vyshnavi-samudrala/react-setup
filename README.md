# Basic react setup

### Features
* Minimal Webpack config with loaders
* ESLint configured with recommended settings
* Babel plugins configured
* Flow configured and type files added for used libs
* Prettier configured for formatting
* Git hooks configured with husky and lint-staged
* Styled components are used for CSS-in-js
* Has pre-commit git hook which prevents you to check in bad code


```
yarn install // install deps

yarn run build  // webpack build

yarn run start  // runs express @4000

yarn run fix // formats and fixes lint

yarn run lint-strict // formats,fixes lint and type checks

```
