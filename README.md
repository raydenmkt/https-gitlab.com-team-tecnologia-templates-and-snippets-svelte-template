# Svelte Template

This is a well featured template for [Svelte](https://svelte.dev/) development.
It includes a hash based routing solution, sass and css preprocessors and linting.

## Getting started

### Creating the project

Copy the template with git clone:

```sh
# clone recent files
git clone --depth 1 https://gitlab.com/team-tecnologia/templates-and-snippets/svelte-template project-name
# enter the project
cd project-name
# remove git repository
rm -rf .git
```

Install the node packages:

```sh
npm install
```

### Running the app

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
