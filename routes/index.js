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
    app.get('/getallchannels',news.allChannels)
    app.get('/getchannels',news.channels) 
    app.post('/getartcles',news.articles)
    app.get('/getDetail',news.detailData)

    //搜索
    app.get('/search',news.searchResult)
}