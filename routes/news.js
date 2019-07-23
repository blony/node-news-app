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
              pubdate: '2019-06-24 16:45:00',
              is_top: 1,
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
                pubdate: '2019-06-24 10:00:00',
                is_top: 0,
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
                pubdate: '2019-06-22 16:00:00',
                is_top: 0,
                cover:{
                    type: 3,
                    images:['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560769107599&di=5cf7b4fb1d1cdbf44d49855ec2c336f5&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20160708%2Fd243976bc8ec49ed9b846f5387d0ee5a_th.jpg',
                            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560769114899&di=a78b544a1bccbbdb4947d951ceacf6b7&imgtype=0&src=http%3A%2F%2Fpic.baike.soso.com%2Fp%2F20131220%2F20131220045830-569113522.jpg',
                            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560769124511&di=24eb01b69bec860f1f4d0820edbf91ba&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170929%2Fa3aa2afcbb9e4403b4dd2d6293f785cf.gif']
                }
              },
              {
                art_id: 3,
                title:'这是第四个大标题，哦也',
                aut_id: 1,
                aut_name:'Bobby',
                comm_count: 102,
                pubdate: '2019-05-24 16:00:00',
                is_top: 0,
                cover:{
                    type: 3,
                    images:['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560769107599&di=5cf7b4fb1d1cdbf44d49855ec2c336f5&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20160708%2Fd243976bc8ec49ed9b846f5387d0ee5a_th.jpg',
                            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560769114899&di=a78b544a1bccbbdb4947d951ceacf6b7&imgtype=0&src=http%3A%2F%2Fpic.baike.soso.com%2Fp%2F20131220%2F20131220045830-569113522.jpg',
                            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560769124511&di=24eb01b69bec860f1f4d0820edbf91ba&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170929%2Fa3aa2afcbb9e4403b4dd2d6293f785cf.gif']
                }
              },
              {
                art_id: 4,
                title:'这是第五个大标题，哦也',
                aut_id: 1,
                aut_name:'Bobby',
                comm_count: 60,
                pubdate: '2018-06-24 16:00:00',
                is_top: 0,
                cover:{
                    type: 0,
                    images:[]
                }
              }]
    }
}

// 所有归类标签
exports.allChannels = (req,res) => {
    res.json({
        code: 1,
        message:'success',
        data:{
            channels:[
                {id:0,name:'热门'},
                {id:1,name:'前端'},
                {id:2,name:'Java'}, 
                {id:3,name:'Python'},
                {id:4,name:'大数据'},
                {id:5,name:'PHP'},
                {id:6,name:'C++'},
                {id:7,name:'区块链'},
                {id:8,name:'Flash'},
                {id:9,name:'Go'},
                {id:10,name:'Nodejs'},
                {id:11,name:'Ruby'},
                {id:12,name:'IOS'},
                {id:13,name:'安卓'},
                {id:14,name:'NET'},
                {id:15,name:'机器学习'},
            ]
        }
    })
}

//user归类标签
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

// 不同模块数据列表的方法
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

// 详情数据方法
exports.detailData = (req, res) =>{
    const { id } = req.query
    console.log(id)
    res.json({
        code:1,
        message:'success',
        data:{
            art_id:1,
            title:'志愿填报谨防不实信息误导',
            pubdate:'2019-02-28 09:12:40',
            aut_id:1,
            aut_name:'流星偃月',
            aut_photo:'https://img2.woyaogexing.com/2019/06/25/5434ac6094b54878a50e331be18f2fff!400x400.jpeg',
            is_followed:true,
            content:'高考招生录取工作早已是阳光工程，凡是打着“必中”“精准报考”“内部消息”“与某某高校密切合作”等各类旗号的志愿填报宣传，均是挂羊头卖狗肉式的虚假宣传或有意误导，不可轻信。'+

            '据媒体报道，近日，多地众多微信公号等自媒体纷纷预估2019年高校录取分数，若干自媒体的预估分数还得到了当事高校的“辟谣”。另有若干从事高考志愿填报指导服务的公司夸大其服务的精准性，打着“必中”等旗号进行虚假宣传或误导宣传。'+
        
            '面对自媒体各种以假乱真的消息，相关高校和部门有必要提醒考生及家长，一定要保持清醒头脑，认清相关微信公号或公司的资质，正确对待高考志愿填报工作，更要谨防受到欺骗而损失钱财、耽误志愿填报的风险。考生与家长切忌病急乱投医，谨防失财又失策。'+
        
            '高考志愿填报是专业性很强的生涯规划指导活动，考生及其家长应该多听取专业性强的官方机构与招生部门的建议，不要随意挑选无资质的相关公司来为自己服务，更不要轻易相信那些未经确认的专家建议或志愿填报指导。同时，高考志愿填报要重点考虑3个参考因素：一是要掌握考生考试成绩与省内排名情况；二是要弄清楚考生意向专业的招生要求（及近年录取分数）与考生的未来职业规划；三是要熟悉高校招生录取的基本原则是平行志愿，即“专业+学校”式志愿填报与录取方式。如果充分考虑了这3个要素，考生及家长也可以成为志愿填报的专家。'+
        
            '而今，高考招生录取工作早已是阳光工程，凡是打着“必中”“精准报考”“内部消息”“与某某高校密切合作”等各类旗号的志愿填报宣传，均是挂羊头卖狗肉式的虚假宣传或有意误导，不可轻信。其中，部分自媒体对某些高校今年录取分数的预估是缺乏足够依据的，有的甚至带有较强的随意性和主观性，这种专业性不足的推断式建议不值得充分参考。相反，应该以考生所在省（市）考试招生机构的官方网站或官方微信公众号为直接依据，也可以参考拟报考高校招生部门的官方网站或官方微信公众号。'+
        
            '尤其需要注意的是，上海、浙江、北京、山东等省份陆续启动新一轮高考改革，实施“两依据一参考”招生录取模式改革，“两依据”即为“统一高考+学业水平考试”，“一参考”即为“综合素质评价”。高考录取总成绩为“3+3”，前一个“3”是统一高考的语数外三科，后一个“3”为高中生自由选考科目。新一轮高考改革赋予了高中生更多选择权，但由于生涯规划教育工作存在不同程度的滞后或开展不完善现象，导致部分高中生缺乏学业生涯规划、职业生涯规划、人生规划能力，家长与教师也未能提供足够多的建议与支持，从而使得高中生生涯规划能力成为新一轮高考中的短板。继而一大批良莠不齐的生涯规划公司应运而生，而一些微信平台为了博取眼球和吸流量也推出了若干生涯规划（含高考志愿填报）的“免费午餐”或“有偿服务”。这些缺乏规范的市场行为或非市场行为，在相当程度上或误导了考生，或歪曲了事实，或造成了考生及家长的经济损失。'+
        
            '对此，教育部门、网信部门、公安部门等职能部门要注意联动，加强对自媒体的运营监管，确保自媒体各类稿件的真实性与可信度。相关高校应该对涉及自身招生录取的不实信息及时辟谣或纠正，避免不可靠消息误导考生和家长。教育部门、市场监管部门要加强对生涯规划指导特别是高考志愿填报领域的市场行为监管，确保相关市场行为在合法、规范的框架下实施。'+
        
            '另外，教育部门不妨主动牵头，联合社会机构、公益组织，大力加强高中生生涯规划教育，切实提升高中学校与教师的高中生生涯规划指导能力，确保高中生既有高考选考选择权又有选择能力与规划能力。同时，国家层面应该多鼓励专业性力量开展相关研究，为高中生生涯规划（含高考志愿填报）工作提供更多支撑。鼓励并扶持有资质、高水平的独立第三方机构提供高中生生涯规划指导服务。',
            recommnets:[
                {id:1,title:'中国域名根服务器准备上线 网络管理当家做主'},
                {id:2,title:'我也不知道写点什么好'},
                {id:3,title:'总之这个页面看起来很牛X🐂的样子'}
            ]
        }
    })
}