module.exports = {
  webpack: (config) => {
    config.resolve.modules.push(`${process.cwd()}/node_modules`);
    return config;
  },
};
