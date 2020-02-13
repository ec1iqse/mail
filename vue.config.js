const path = require("path");

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    lintOnSave: true,
    chainWebpack: config => {
        config.resolve.alias
            .set("@", resolve("src"))
            .set("assets", resolve("src/assets"))
            .set("components", resolve("src/components"))
            .set("layout", resolve("src/layout"))
            .set("network", resolve("src/network"))
            .set("common", resolve("src/common"))
            .set("router", resolve("src/router"))
            .set("store", resolve("src/store"))
            .set("views", resolve("src/views"))

    },
};
