module.exports = ({ config }) => {
  config.resolve.extensions.push(".ts", ".tsx", ".scss");

  return config;
};
