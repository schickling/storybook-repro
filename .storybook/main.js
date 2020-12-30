module.exports = {
  stories: [
    // "../src/stories/**/*.stories.mdx",
    // '../src/stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  reactOptions: {
    fastRefresh: true,
    strictMode: true,
  },
}
