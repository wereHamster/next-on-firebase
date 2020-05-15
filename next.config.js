module.exports = {
  webpack(config) {
    config.externals.push("firebase");

    return config;
  },
};
