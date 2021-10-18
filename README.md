# Svelte Ionic Template

This template glues [Svelte](https://svelte.dev/) and
[Ionic](https://ionicframework.com/) together for Apps in Android and iOS
development.

## Getting started

### The environment

You must have node with npm installed. You should also have your app development
environment setup just as described by the ionic docs for
[Android](https://ionicframework.com/docs/developing/android) and
[iOS](https://ionicframework.com/docs/developing/ios). This project is made to be run
with capacitor and not cordova.

### Creating the project

Copy the template with `degit`:

```
npx degit victoragcosta/svelte-ionic-template project-name
```

Install the node packages:

```
npm install
```

Install the ionic cli utility:

```
npm install -g @ionic/cli
```

### Running the app

Copy the `@ionic/core` library to the public folder before using it. To do that
you may just run `npm run build` once. It will create a production build and
copy the needed libraries for the front-end from `node_modules`. Dev mode, which
is used for live reloading, does not copy the `@ionic/core` library

Start the app in Android and iOS with:

```sh
npm run ionic-run:android            # compile standalone version and run in android
npm run ionic-run:ios                # compile standalone version and run in ios
npm run ionic-run-livereload:android # run with live reload on android
npm run ionic-run-livereload:ios     # run with live reload on ios
```

Make sure your mobile device is on the same WiFi as the computer for the
live reload mode to work.

You may also want to run on your browser. You can do that by running:

```sh
npm run dev   # live reloading mode
npm run build # generate production build
npm run start # serve the production build
```

## Configuring the linter for Svelte

Learn to configure the linter to work with your code editor in the
[eslint-plugin-svelte3 integrations page](https://github.com/sveltejs/eslint-plugin-svelte3/blob/master/INTEGRATIONS.md).
You can add linter configurations on the file `.eslintrc.cjs` but be careful and
add Typescript related rules only for typescript.

## TODO

* [ ] Add testing framework(s)

  * Jest
  * Storybook

* [ ] Improve linter configurations
* [ ] Add linting for SCSS and CSS
* [ ] Add JS polyfills
* [ ] Add router (routify)
* [ ] Add automated error collection
* [ ] Add path converter
* [x] Add ionic UI examples
* [ ] Add SCSS variables for screen size media queries
