<<<<<<< HEAD
module.exports = {
  chainWebpack: config => {
    config.devServer.proxy({
      "/api": {
        target: "http://47.110.74.37:7001/"
=======
const path = require("path");

const resolve = dir => path.join(__dirname, dir);

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set("common", resolve("src/common"))
      .set("components", resolve("src/components"))
      .set("views", resolve("src/views"));
    config.devServer.proxy({
      "/api": {
        target: "http://movie.ihaoze.cn/"
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
      }
    });
  },
  css: {
    loaderOptions: {
      stylus: {
<<<<<<< HEAD
        import: ["~@/assets/styles/mixin.styl"]
=======
        import: ["~common/styles/mixin.styl"]
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
      }
    }
  }
};
