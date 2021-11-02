const neutrino = require("neutrino")
const custom = neutrino().webpack()

module.exports = {
  stories: ["../stories/*stories*"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          ...custom.resolve.alias,
        },
      },
      module: { ...config.module, rules: custom.module.rules },
    }
  },
}
