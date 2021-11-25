{
  mode: 'production',
  resolve: {
    modules: [
      '/home/ilya/Desktop/pgit/React-and-webpack/build/js/packages/Reack_and_webpack/kotlin-dce',
      'node_modules'
    ]
  },
  plugins: [
    ProgressPlugin {
      profile: false,
      handler: [Function: handler],
      modulesCount: 5000,
      dependenciesCount: 10000,
      showEntries: true,
      showModules: true,
      showDependencies: true,
      showActiveModules: false,
      percentBy: undefined
    },
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {}
          },
          {
            loader: 'css-loader',
            options: {}
          }
        ]
      }
    ]
  },
  entry: {
    main: [
      '/home/ilya/Desktop/pgit/React-and-webpack/build/js/packages/Reack_and_webpack/kotlin-dce/Reack_and_webpack.js'
    ]
  },
  output: {
    path: '/home/ilya/Desktop/pgit/React-and-webpack/build/distributions',
    filename: [Function: filename],
    library: 'Reack_and_webpack',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devtool: 'source-map',
  ignoreWarnings: [
    /Failed to parse source map/
  ],
  stats: {
    warnings: false,
    errors: false
  }
}