const {override, fixBabelImports} = require('customize-cra');
//按需引入antd的样式文件
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
);