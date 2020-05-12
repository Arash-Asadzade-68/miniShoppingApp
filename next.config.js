const withSass = require("@zeit/next-sass");
const path = require("path");


module.exports = withSass(
  {
    cssModules: true,
    distDir: 'build',
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]"
    },
    serverRuntimeConfig: {
      PORT: 3000,
      COOKIE_SECRET: "secret",
      API_GATEWAY_URL: "https://api.punkapi.com/v2",
      APP_GATEWAY_URL: "http://localhost:3000"
    },
    webpack(config, options) {
      config.resolve.alias["components"] = path.join(__dirname, "components");
      config.resolve.alias["public"] = path.join(__dirname, "public");
      return config;
    },


  }
);