module.exports = {
    entry: {
        'app.component': './components/app/app.component.ts'
    },
    output: {
        path: './components/app',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'babel-loader?presets[]=es2015,presets[]=stage-3!ts',
                exclude: [ /node_modules/ ]
            }
        ]
    }
};
