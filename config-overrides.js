const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@components": "src/components",
    "@assets": "src/assets",
    "@pages": "src/pages",
    "@routes": "src/routes'",
    "@utils": "src/utils",
    "@zustand": "src/zustand",
  })(config);

  return config;
};
