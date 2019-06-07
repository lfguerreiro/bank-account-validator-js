const path = require("path");
const webpack = require("webpack");
const copyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = env => {
  return [
    {
      context: path.resolve(__dirname, './'),
      entry: ["./src/index.js"],
      output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].[hash].js"
      },

      devServer: {
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        contentBase: path.join(__dirname, "dist"),
        port: 8080,
        open: true
      },

      module: {
        rules: [
          {
            test: /\.js$/i,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: [
                  [
                    "@babel/env",
                    {
                      targets: {
                        browsers: ["ie 6", "safari 7"]
                      }
                    }
                  ],
                ],
                plugins: ['@babel/plugin-proposal-object-rest-spread']
              }
            }
          },
        ]
      },
      // jshint: {
      //   camelcase: true,
      //   emitErrors: false,
      //   failOnHint: false,
      //   reporter: function(errors) { console.log(errors) }
      // },
      plugins: [
        new CleanWebpackPlugin(),
        new copyWebpackPlugin([{ from: "./index.html" }]),

        new HtmlWebpackPlugin({
          inject: false,
          hash: true,
          filename: "index.html",
          template: "./index.html",
          // minify: {
          //   minifyJS: true,
          //   collapseWhitespace: true,
          //   removeComments: true,
          //   removeRedundantAttributes: true,
          //   removeScriptTypeAttributes: true,
          //   removeStyleLinkTypeAttributes: true,
          //   useShortDoctype: true
          // },
        })
      ],
      optimization: {
        minimizer: [
          new UglifyJsPlugin()
        ]
      }
    }
  ];
};
