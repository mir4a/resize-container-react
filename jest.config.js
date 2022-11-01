module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  moduleNameMapper: {
    ".(css|less|scss)$": "identity-obj-proxy",
    "\\.svg$": "<rootDir>/__mocks__/svg.js",
  },
};
