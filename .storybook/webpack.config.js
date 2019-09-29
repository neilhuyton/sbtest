const path = require("path");

module.exports = ({ config }) => {
  config.resolve.extensions.push(".ts", ".tsx", ".css");

  // config.module.rules.push({
  //   test: /\.scss$/,
  //   use: ["style-loader", "css-loader"],
  //   include: path.resolve(__dirname, "../")
  // });

  return config;
};
