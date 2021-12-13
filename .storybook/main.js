module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"
  ],
  "addons": [
    '@storybook/preset-scss',
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-svelte-csf"
  ],
  "framework": "@storybook/svelte",
  "svelteOptions": {
    "preprocess": require("svelte-preprocess")()
  },
  core: {
    builder: 'webpack5',
  },
}