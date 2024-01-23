const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

module.exports = async () => {
  const defaultConfig = await getDefaultConfig(__dirname);

  const customConfig = {
    // Add your custom configuration here
    resolver: {
      extraNodeModules: {
        assert: require.resolve("empty-module"),
        http: require.resolve("empty-module"),
        https: require.resolve("empty-module"),
        os: require.resolve("empty-module"),
        url: require.resolve("empty-module"),
        zlib: require.resolve("empty-module"),
        path: require.resolve("empty-module"),
        crypto: require.resolve("crypto-browserify"),
        stream: require.resolve("readable-stream"),
      },
      assetExts: defaultConfig.resolver.assetExts.filter((ext) => ext !== "svg"),
      sourceExts: process.env.TEST_REACT_NATIVE ? ["e2e.js"].concat(defaultConfig.resolver.sourceExts) : defaultConfig.resolver.sourceExts,
    },
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
    },
  };

  return mergeConfig(defaultConfig, customConfig);
};
