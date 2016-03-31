module.exports = {
    entry: {
        'app.component': './components/app/app.component.ts',
        'redux.component': './redux/redux.component.ts',
        'tabs.component': './components/tabs/tabs.component.ts',
        'hero.component': './components/hero/hero.component.ts',
        'problem-index.component': './components/problem-index/problem-index.component.ts',
        'tutorial.component': './components/tutorial/tutorial.component.ts',
        'create-problem.component': './components/create-problem/create-problem.component.ts'
    },
    output: {
        path: './dist',
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
