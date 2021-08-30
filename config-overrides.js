const {override, fixBabelImports,addLessLoader} = require('customize-cra');
//按需引入antd的样式文件
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    //修改主题 这里注意less-loader插件的版本不能过高，太高不支持这种写法
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,//允许用js修改
            modifyVars: {'@primary-color': '#1DA57A'},
        },
    }),
);