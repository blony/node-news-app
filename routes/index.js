const user = require('./user')
const news = require('./news')
//const table = require('./table')
module.exports = app => {
    //用户操作
    app.post('/user/login',user.login)
    app.post('/user/authorzations',user.authorzations)
    app.get('/user/getsmscode',user.getsmscode)
    app.post('/user/logout',user.logout)

    //新闻数据
    app.get('/getchannels',news.channels) 
    app.post('/getartcles',news.articles)
}