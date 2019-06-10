module.exports = {
    context: __dirname + '/tssrc',
    entry: {
      index: './Bootstrap.ts'
    },
    mode: 'development',
    output: {
        path: __dirname + '/tsdist',
        publicPath: '/',
        library:"CocosTSGame",
        filename: 'bundle.js'
    },
    resolve: {
      modules: [__dirname ,"node_modules"],
      extensions: [ '.ts', '.js']
    },
    devtool: 'source-map',
    module: {
      rules: [
        { test: /\.ts$/, loaders: ['ts-loader'], exclude: /node_modules/ }
      ]
    }
}