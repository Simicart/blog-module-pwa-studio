const componentOverrideMapping = require('./componentOverrideMapping');
const moduleOverridePlugin = require('./moduleOverrideWebpackPlugin');

/**
 * Custom intercept file for the extension
 * By default you can only use target of @magento/pwa-buildpack.
 *
 * If do want extend @magento/peregrine or @magento/venia-ui
 * you should add them to peerDependencies to your package.json
 *
 * If you want to add overwrites for @magento/venia-ui components you can use
 * moduleOverrideWebpackPlugin and componentOverrideMapping
 */
module.exports = targets => {
    targets.of('@magento/pwa-buildpack').specialFeatures.tap(flags => {
        /**
         *  Wee need to activated esModules and cssModules to allow build pack to load our extension
         * {@link https://magento.github.io/pwa-studio/pwa-buildpack/reference/configure-webpack/#special-flags}.
         */
        flags[targets.name] = { esModules: true, cssModules: true, graphqlQueries: true };
    });
    targets.of("@magento/venia-ui").routes.tap(routes => {
        routes.push({
            name: "BlogHome",
            pattern: "/blog.html",
            path: require.resolve("./components/home/index.js")
        });
        routes.push({
            name: "BlogCategory",
            pattern: "/blog/category/:categoryUrl?",
            path: require.resolve("./components/category/index.js")
        });
        routes.push({
            name: "BlogTag",
            pattern: "/blog/tag/:tagUrl?",
            path: require.resolve("./components/tag/index.js")
        });
        routes.push({
            name: "BlogTopic",
            pattern: "/blog/topic/:topicUrl?",
            path: require.resolve("./components/topic/index.js")
        });
        routes.push({
            name: "BlogArchive",
            pattern: "/blog/month/:monthUrl?",
            path: require.resolve("./components/month/index.js")
        });
        routes.push({
            name: "BlogAuthor",
            pattern: "/blog/author/:authorUrl?",
            path: require.resolve("./components/author/index.js")
        });
        routes.push({
            name: "BlogPost",
            pattern: "/blog/post/:postUrl?",
            path: require.resolve("./components/post/index.js")
        });
        return routes;
    });
    targets.of('@magento/pwa-buildpack').webpackCompiler.tap(compiler => {
        new moduleOverridePlugin(componentOverrideMapping).apply(compiler);
    })
};
