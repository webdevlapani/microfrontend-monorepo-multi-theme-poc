module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ['azaVista'],
  // Lint ".storybook" folder (don't ignore it)
  ignorePatterns: ['!.storybook']
};
