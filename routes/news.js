var newLists = {
    code: 1,
    message: 'success',
    data:{
        page:1,
        results:[
            {
              art_id:0,
              title:'这是个大标题，哦也',
              aut_id: 1,
              aut_name:'Bobby',
              comm_count: 10,
              pubdate: 10,
              is_tap: 1,
              cover:{
                  type: 1,
                  images:['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560769107599&di=5cf7b4fb1d1cdbf44d49855ec2c336f5&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20160708%2Fd243976bc8ec49ed9b846f5387d0ee5a_th.jpg']
              }
            },
            {
                art_id: 1,
                title:'这是第二个个大标题，哦也',
                aut_id: 1,
                aut_name:'Bobby',
                comm_count: 10,
                pubdate: 10,
                is_tap: 0,
                cover:{
                    type: 0,
                    images:[]
                }
              },
              {
                art_id: 2,
                title:'这是第三个大标题，哦也',
                aut_id: 1,
                aut_name:'Bobby',
                comm_count: 10,
                pubdate: 10,
                is_tap: 0,
                cover:{
                    type: 3,
                    images:['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560769107599&di=5cf7b4fb1d1cdbf44d49855ec2c336f5&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20160708%2Fd243976bc8ec49ed9b846f5387d0ee5a_th.jpg',
                            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560769114899&di=a78b544a1bccbbdb4947d951ceacf6b7&imgtype=0&src=http%3A%2F%2Fpic.baike.soso.com%2Fp%2F20131220%2F20131220045830-569113522.jpg',
                            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560769124511&di=24eb01b69bec860f1f4d0820edbf91ba&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170929%2Fa3aa2afcbb9e4403b4dd2d6293f785cf.gif']
                }
              }]
    }
}

exports.channels = (req,res) => {
    res.json({
        code:1,
        message:'success',
        data:{
            channels:[
                {id:0,name:'热门'},
                {id:1,name:'前端'},
                {id:2,name:'Java'}, 
                {id:3,name:'Python'},
                {id:4,name:'大数据'},
                {id:5,name:'PHP'},
                {id:6,name:'设计'},
            ]
        }
    })
}

exports.articles = (req,res)=> {
    const { id } = req.body
    switch (id) {
        case 0:
        res.json(newLists)
        break;
        case 1:
        res.json(newLists)
        break;
        case 2:
        res.json(newLists)
        break;
        case 3:
        res.json(newLists)
        break;
        case 4:
        res.json(newLists)
        break;
        case 5:
        res.json(newLists)
        break;
        case 6:
        res.json(newLists)
        break;
    }
}