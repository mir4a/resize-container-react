module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    ".(css|less|scss)$": "identity-obj-proxy",
    "^.+\\.svg$": "jest-svg-transformer",
  },
};
