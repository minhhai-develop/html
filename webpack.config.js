//https://jonathanmh.com/webpack-sass-scss-compiling-separate-file/
//https://julienrenaux.fr/2015/03/30/introduction-to-webpack-with-practical-examples/

//http://stackoverflow.com/questions/29080148/expose-jquery-to-real-window-object-with-webpack
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const glob = require("glob");

const root = __dirname.replace(/\\/g, '/');

let entry = {};
glob.sync(path.join(__dirname, './resource/asset/admin/js/**/app/**/*.js')).forEach((file) => {
    const relative = '/resource/asset/admin/js/app/';
    const dir = `${root}${relative}`;

    file = file.replace(dir, '').replace(/^\/|\/$/g, '');
    const output = file.replace(/\.[^.]*$/, '');

    entry[`admin/js/${output}`] = `.${relative}${file}`;
});

glob.sync(path.join(__dirname, './resource/asset/admin/css/*.css')).forEach((file) => {
    const relative = '/resource/asset/admin/css/';
    const dir = `${root}${relative}`;

    file = file.replace(dir, '').replace(/^\/|\/$/g, '');
    const output = file.replace(/\.[^.]*$/, '');

    entry[`admin/css/${output}`] = `.${relative}${file}`;
});

glob.sync(path.join(__dirname, './resource/asset/admin/less/**/app/**/*.less')).forEach((file) => {
    const relative = '/resource/asset/admin/less/app/';
    const dir = `${root}${relative}`;

    file = file.replace(dir, '').replace(/^\/|\/$/g, '');
    const output = file.replace(/\.[^.]*$/, '');

    entry[`admin/css/${output}`] = `.${relative}${file}`;
});

glob.sync(path.join(__dirname, './resource/asset/admin/scss/**/app/**/*.scss')).forEach((file) => {
    const relative = '/resource/asset/admin/scss/app/';
    const dir = `${root}${relative}`;

    file = file.replace(dir, '').replace(/^\/|\/$/g, '');
    const output = file.replace(/\.[^.]*$/, '');

    entry[`admin/css/${output}`] = `.${relative}${file}`;
});

module.exports = {
    entry: entry,
    output: {
        filename: './public/[name].min.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: __dirname + 'resource',
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader']
                })
            },
            {
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract([
                    'css-loader',
                    'less-loader'
                ])
            }
        ],
    },
    plugins: [
        new ExtractTextPlugin({
            filename: './public/[name].min.css',
            allChunks: true,
        })
    ]
};
