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