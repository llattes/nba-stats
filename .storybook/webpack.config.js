const path = require("path");

module.exports = ({ config }) => {
    config.module.rules.push(
        {
            test: /\.tsx?$/,
            include: path.resolve(__dirname, "../src"),
            exclude: path.resolve(__dirname, "../node_modules/"),
            use: [
                {
                    loader: require.resolve("awesome-typescript-loader"),
                    options: {
                        presets: [["react-app", { flow: false, typescript: true }]]
                    }
                },
                require.resolve("react-docgen-typescript-loader")
            ]
        },
        {
            test: /\.stories\.(ts|tsx)$/,
            exclude: path.resolve(__dirname, "../node_modules/"),
            use: [
                {
                    loader: require.resolve("@storybook/addon-storysource/loader"),
                    options: { parser: "typescript" }
                }
            ]
        }
    );
    config.resolve.extensions.push(".ts", ".tsx", ".jsx");

    // Enable/disable hot-reload
    if (process.env.DISABLE_STORYBOOK_HMR === "true") {
        config.entry = config.entry.filter(singleEntry => !singleEntry.includes("/webpack-hot-middleware/"));
    }

    return config;
};
