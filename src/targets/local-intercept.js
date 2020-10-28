const componentOverrideMapping = require('./componentOverrideMapping');
const moduleOverridePlugin = require('./moduleOverrideWebpackPlugin');

module.exports = targets => {
    targets.of("@magento/venia-ui").routes.tap(routes => {
        routes.push({
            name: "BlogHome",
            pattern: "/blog.html",
            path: require.resolve("../components/home/index.js")
        });
        routes.push({
            name: "BlogCategory",
            pattern: "/blog/category/:categoryUrl?",
            path: require.resolve("../components/category/index.js")
        });
        routes.push({
            name: "BlogTag",
            pattern: "/blog/tag/:tagUrl?",
            path: require.resolve("../components/tag/index.js")
        });
        routes.push({
            name: "BlogTopic",
            pattern: "/blog/topic/:topicUrl?",
            path: require.resolve("../components/topic/index.js")
        });
        routes.push({
            name: "BlogArchive",
            pattern: "/blog/month/:monthUrl?",
            path: require.resolve("../components/month/index.js")
        });
        routes.push({
            name: "BlogPost",
            pattern: "/blog/post/:postUrl?",
            path: require.resolve("../components/post/index.js")
        });
        return routes;
    });
    targets.of('@magento/pwa-buildpack').webpackCompiler.tap(compiler => {
        new moduleOverridePlugin(componentOverrideMapping).apply(compiler);
    })
};