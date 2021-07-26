const proxy = require('http-proxy-middleware')

module.exports = function (app){
    app.use(
        proxy('/api1',{ //遇见/api1前缀的请求，就会触发该代理配置
            target:'http://localhost:5000', //请求转发给谁
            changeOrigin:true,  //控制服务器收到的请求头host字段的值
            /*
            *true:服务器收到的请求头中的host为：localhost：5000
            *false:服务器收到的请求头中的host为：localhost：3000
            * */
            pathRewrite:{'^/api1':''}
            //重写请求路径/api1替换为''（因为api这个路径是你自己加的一个标识，后端接口路径没有这个）
        }),
    )
}