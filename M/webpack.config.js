var webpack =require("webpack");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool:"source-map",
    entry: {
        index:path.join(__dirname , "src/index.js")
    }, //�Ѷ���ἰ��Ψһ����ļ�
    output: {
        path: path.join(__dirname ,"dist"), //�������ļ���ŵĵط�
        filename: "[name].bundle.js",//���������ļ����ļ���
        publicPath:"/dist/"   //webpack output is served from
    },

    devServer: {
        inline:true,
        contentBase: "./",  //content not from webpack is serverd
        port: '8088',
        historyApiFallback: true,

        proxy:{
           '/mobileWeb/': {
                  target: 'https://www.missevan.com',
                  host: 'www.missevan.com',
                  changeOrigin:true
              },
              "/sound/":{
                target: 'https://www.missevan.com',
                host: 'www.missevan.com',
                changeOrigin:true
              },
              "/explore/":{
                target: 'https://www.missevan.com',
                host: 'www.missevan.com',
                changeOrigin:true
              },
              "/drama/":{
              	target: 'https://www.missevan.com',
              	host: 'www.missevan.com',
              	changeOrigin:true
              },
              "/mobile/":{
              	target: 'https://app.missevan.com',
              	host: 'app.missevan.com',
              	changeOrigin:true
              }
        }

    },


    module:{
        loaders:[
         
            {
                test: /\.css$/,
                 loader: 'style-loader!css-loader'//��Ӷ���ʽ��Ĵ���,������ʽ
                // loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })//�ⲿ��ʽ
            },

            {
                test: /\.scss$/,
                 loader: 'style-loader!css-loader!sass-loader'//��Ӷ���ʽ��Ĵ���,������ʽ
                // loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' })//�ⲿ��ʽ
            },

            {
                test:/\.js$/, //������test ����
                exclude: /node_modules/, //�ų�һ��
                // exclude: /(node_modules|src)/, //*****�ų������ôд������
                loader:'babel-loader',
                query:{
                    presets:['env','react']
                }
                
            },

            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader',
                options: {
                  name: 'fonts/[name].[ext]?[hash]' //Ŀ���ļ���
                }
            }, //��Ӷ������ļ���֧�֡�

            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                  name: 'img/[name].[ext]'
                }
            }
            
        ]
    },

    resolve: {
        alias: {
          '@': path.resolve("src")
        }
        //��һ������@assets
    },

    plugins:[
        new webpack.ProvidePlugin({
            axios: 'axios'  //����ģ�鶼����ʹ��axios
        })
        // new ExtractTextPlugin({ filename: 'css/[name].css', disable: false, allChunks: true })
    ]    
}
