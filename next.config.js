const withFonts = require('next-fonts')

module.exports = withFonts({
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 100000
          }
        },
      ],
    })

    // if (!options.isServer) {
    //   config.node = {
    //     fs: false
    //   }
    // }

    return config
  },
  resolve: {
    fallback: {
        fs: false,
    }
  },
  typescript: {
    ignoreBuildErrors: true,
  }
})