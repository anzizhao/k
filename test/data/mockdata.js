function generateObj () {
    return {
        allArticles: {   // 获取文章列表
            key: '',
            banner: 'img/l-banner.jpg',
            articles: [
                {
                    article_id: '', //文章ID
                    type: 'article',  //类型, 'article'文章信息
                    title: '这个女人竟比《欢乐颂c》的女主们还受欢迎？猪肉西施揭露成为我特么也不知',  //文章标题
                    picture: 'img/artcle-pic.jpg', // 文章图片
                    link: '#', // 外链, 这里不需要
                    post_date: '2016年8月30日', // 文章发布时间
                },
                {
                    article_id: '', //文章ID
                    type: 'link',  //类型, 'link'跳转链接
                    title: '这是一个外链文章这是一个外链文章这是一个外链文章这是一个外链文章这是一个外链文章',  //文章标题
                    picture: 'img/artcle-pic.jpg', // 文章图片
                    link: 'http://www.baidu.com', // 外链, 这里需要
                    post_date: '2016年8月29日', // 文章发布时间
                },
                {
                    article_id: '', //文章ID
                    type: 'article',  //类型, 'article'文章信息
                    title: '这个女人竟比《欢乐颂c》的女主们还受欢迎？猪肉西施揭露成为我特么也不知',  //文章标题
                    picture: 'img/artcle-pic.jpg', // 文章图片
                    link: '#', // 外链, 这里不需要
                    post_date: '2016年8月30日', // 文章发布时间
                },
                {
                    article_id: '', //文章ID
                    type: 'link',  //类型, 'link'跳转链接
                    title: '这是一个外链文章这是一个外链文章这是一个外链文章这是一个外链文章这是一个外链文章',  //文章标题
                    picture: 'img/artcle-pic.jpg', // 文章图片
                    link: 'http://www.baidu.com', // 外链, 这里需要
                    post_date: '2016年8月29日', // 文章发布时间
                },
                {
                    article_id: '', //文章ID
                    type: 'article',  //类型, 'article'文章信息
                    title: '这个女人竟比《欢乐颂c》的女主们还受欢迎？猪肉西施揭露成为我特么也不知',  //文章标题
                    picture: 'img/artcle-pic.jpg', // 文章图片
                    link: '#', // 外链, 这里不需要
                    post_date: '2016年8月30日', // 文章发布时间
                },
                {
                    article_id: '', //文章ID
                    type: 'link',  //类型, 'link'跳转链接
                    title: '这是一个外链文章这是一个外链文章这是一个外链文章这是一个外链文章这是一个外链文章',  //文章标题
                    picture: 'img/artcle-pic.jpg', // 文章图片
                    link: 'http://www.baidu.com', // 外链, 这里需要
                    post_date: '2016年8月29日', // 文章发布时间
                }
            ]
        },
        noArticles: {   // 获取文章列表
            key: '',
            banner: 'img/l-banner.jpg',
            articles: [],
        },
        menus: {  // 获取菜单
            button : [
                {
                    "name":"考拉动态",
                    "sub_button":[
                        {
                            "type":"click", // type 为click, 前端做的一些操作
                            "name":"公司动态",
                            "key": "companyStateM",
                        },
                        {
                            "type":"click", 
                            "name":"产品动态",
                            "key": "productStateM",
                        },
                        {
                            "type":"click", 
                            "name":"同行动态",
                            "key": "peerCompanyStateM",
                        },
                    ]
                },
                {
                    "name":"武林秘笈",
                    "sub_button":[
                        {
                            "type":"click", // type 为click, 前端做的一些操作
                            "name":"最新案例",
                            "key": "newCaseM",
                        },
                        {
                            "type":"click", 
                            "name":"培训",
                            "key": "trainM",
                        },
                        {
                            "type":"click", 
                            "name":"话术",
                            "key": "speechcraftM",
                        },
                        {
                            "type":"click", 
                            "name":"热门活动",
                            "key": "hotActivityM",
                        },
                        {
                            "type":"click", 
                            "name":"行业方案",
                            "key": "industrySolutionsM",
                        },
                        {
                            "type":"click", 
                            "name":"相关硬件",
                            "key": "relatedHardwareM",
                        },
                    ]
                },
                {
                    "name":"战绩排名",
                    "sub_button":[
                        {
                            "type":"view",    //type为view, 直接点击url跳转
                            "name":"我的战绩",
                            "url":"http://v.qq.com/"
                        },
                        {
                            "type":"view",    
                            "name":"我的商家",
                            "url":"http://v.qq.com/"
                        },
                        {
                            "type":"view",    
                            "name":"我的战队",
                            "url":"http://v.qq.com/"
                        },
                        {
                            "type":"click", 
                            "name":"名人堂",
                            "key": "hallOfFameM",
                        },
                    ]
                }
            ]
        },
        recommendArticle: {  // 推送文章
            key: '',
            link: '',
            articles : [
                {
                    article_id: '', 
                    type: 'article',  
                    title: '人物志| 众神退让，KBA最萌战神新鲜出炉!',  
                    picture: '../img/banner1.jpg', 
                    link: '', 
                    post_date: '', 
                },
                {
                    article_id: '', 
                    type: 'article',  
                    title: '人物志| 众神退让，KBA最萌战神新鲜出炉!',  
                    picture: '../img/artcle-pic.jpg', 
                    link: '', 
                    post_date: '', 
                },
                {
                    article_id: '', 
                    type: 'article',  
                    title: '小小粮油店暴涨3000粉丝的秘诀竟然是这个！',  
                    picture: '../img/artcle-pic.jpg', 
                    link: '', 
                    post_date: '' 
                }
            ]
        },
        recommendGoods: {  // 推送文章
            key: '',
            link: '',
            articles : [
                {
                    article_id: '423', 
                    type: 'goodsInfo',  
                    title: '打印下单小票,清晰方便操作便利',  
                    name: '蓝牙打印机',   // 商品名称 
                    price: 58.90,  // 商品价格
                    picture: 'test/img/蓝牙打印机.png', 
                    link: 'https://www.baidu.com/', 
                    post_date: '', 
                },
                {
                    article_id: '424', 
                    type: 'goodsInfo',  
                    title: '链接方便 通话清晰',  
                    name: '蓝牙耳机',   // 商品名称 
                    price: 58.90,  // 商品价格
                    picture: 'test/img/蓝牙耳机.png', 
                    link: 'https://www.baidu.com/', 
                    post_date: '', 
                },
                {
                    article_id: '425', 
                    type: 'goodsInfo',  
                    title: '一键下单出单',  
                    name: '点单平台机器',   // 商品名称 
                    price: 58.90,  // 商品价格
                    picture: 'test/img/点单平台机器.png', 
                    link: 'https://www.baidu.com/', 
                    post_date: '', 
                },
            ]
        },
        articleDetail: {
            article_id: '', //文章ID
            title: '这个女人竟比《欢乐颂c》的女主们还受欢迎？猪肉西施揭露成为我特么也不知',  //文章标题
            post_date: '2016年8月30日', // 文章发布时间
            tags: [{
                id: '11', 
                name: '卖肉'
            }, {
                id: '12', 
                name: '欢乐颂'
            }, {
                id: '13', 
                name: '西施'
            }],
            content: '<div class="rich_media_content " id="js_content"><p>文记农庄桑拿锅全开啦。随着新一批养足260多天的鸡上市，农庄优质的食材资源得到补足，现计划11月15号起，全面开放桑拿锅，想吃就赶紧了。一锅桑拿鸡，五斤多的自养扇鸡，连锅底一起也只需一百五十多元。每市只有招待五座，需提前预约订座。</p><p><img data-s="300,640" data-src="http://mmbiz.qpic.cn/mmbiz/5D4Dtx7YC0kVCNZHx6hckLDLwLq3jjbr5sEWrpXtLyddVYBofzNUxv5jvpFIBBPT3qUMbMylTOSnoEnibMnsib4w/0?wx_fmt=jpeg" data-ratio="1.3326693227091633" data-w="" src="http://mmbiz.qpic.cn/mmbiz/5D4Dtx7YC0kVCNZHx6hckLDLwLq3jjbr5sEWrpXtLyddVYBofzNUxv5jvpFIBBPT3qUMbMylTOSnoEnibMnsib4w/640?wx_fmt=jpeg&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1" style="width: auto !important; height: auto !important; visibility: visible !important;" data-fail="0"><br>            一桌桑拿鸡</p><p><br></p><p><img data-s="300,640" data-src="http://mmbiz.qpic.cn/mmbiz/5D4Dtx7YC0kVCNZHx6hckLDLwLq3jjbrkMMkELWiaOjBWNGbp1LGWfzJp3c75l9QpLee0mAXWWw36uZDDvNjYBg/0?wx_fmt=jpeg" data-ratio="1.3326693227091633" data-w="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJDQzA1MTVGNkE2MjExRTRBRjEzODVCM0Q0NEVFMjFBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJDQzA1MTYwNkE2MjExRTRBRjEzODVCM0Q0NEVFMjFBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkNDMDUxNUQ2QTYyMTFFNEFGMTM4NUIzRDQ0RUUyMUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkNDMDUxNUU2QTYyMTFFNEFGMTM4NUIzRDQ0RUUyMUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6p+a6fAAAAD0lEQVR42mJ89/Y1QIABAAWXAsgVS/hWAAAAAElFTkSuQmCC" style="width: 670px !important; height: 892.888px !important;"></p><p>      独门桑拿技巧“冬瓜桑拿”<br></p><p><br><img data-s="300,640" data-src="http://mmbiz.qpic.cn/mmbiz/5D4Dtx7YC0kVCNZHx6hckLDLwLq3jjbrED0kgKttRywRU9bPkA0tt4OE0kLqrbfFmy0P2knXvOBBhQyIUTPLpg/0?wx_fmt=jpeg" data-ratio="1.3326693227091633" data-w="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZi"',
        },

        aresCard: {  // 战神名片
            partner_id: 12345, // 战队编号
            employee_sn: 012, // 战神编号
            partner_name: '广州1队', // 战队名称
            employee_name: '刘大成',  // 战神姓名
            employee_avatar: 'img/header.png', // 战神头像url
            rank: 1,  // 战神排名
            development: 70, // 开拓力
            leadership: 50, // 领导力
            influence: 80, // 影响力
            star_num:  4, // 星星个数
        },
        aresScore: {
            partner_id: 12345, // 战队id
            employee_sn: 012, // 战神编号
            new_stores_num: 1000, // 拓展店数
            heat: 5016, //热度
            beat_ratio: 70, //击败全国战神数
            one_heat: {
                rank: 10, // 热度对内排名
                number: 3420, // 热度数量
                ratio: 30.55, // 热度百分比
            },   // 1热度情况
            two_heat: {
                rank: 8, // 热度对内排名
                number: 3986, // 热度数量
                ratio: 20.55, // 热度百分比
            },   // 2热度情况
            three_heat: {
                rank: 4, // 热度对内排名
                number: 3290, // 热度数量
                ratio: 20.55, // 热度百分比
            },   // 3热度情况
        },
        aresStores: {
            stores:[
                {
                    store_id: '111',
                    store_name: '芙蓉兴盛', // 店铺名称
                    proportion: '7.48',  // 环比
                    up_or_down: 'up',  // 升或降, up为升 down为降
                },
                {
                    store_id: '112',
                    store_name: '武汉周黑鸭', // 店铺名称
                    proportion: '7.48',  // 环比
                    up_or_down: 'up',  // 升或降, up为升 down为降
                },
                {
                    store_id: '113',
                    store_name: '橘果子', // 店铺名称
                    proportion: '7.48',  // 环比
                    up_or_down: 'down',  // 升或降, up为升 down为降
                },
                {
                    store_id: '114',
                    store_name: '7-11便利店', // 店铺名称
                    proportion: '7.48',  // 环比
                    up_or_down: 'up',  // 升或降, up为升 down为降
                },
                {
                    store_id: '115',
                    store_name: '7-11便利店', // 店铺名称
                    proportion: '7.48',  // 环比
                    up_or_down: 'up',  // 升或降, up为升 down为降
                },
                {
                    store_id: '116',
                    store_name: '橘果子', // 店铺名称
                    proportion: '7.48',  // 环比
                    up_or_down: 'down',  // 升或降, up为升 down为降
                },
                {
                    store_id: '117',
                    store_name: '7-11便利店', // 店铺名称
                    proportion: '7.48',  // 环比
                    up_or_down: 'up',  // 升或降, up为升 down为降
                },
                {
                    store_id: '118',
                    store_name: '7-11便利店', // 店铺名称
                    proportion: '7.48',  // 环比
                    up_or_down: 'up',  // 升或降, up为升 down为降
                },
                {
                    store_id: '119',
                    store_name: '芙蓉兴盛', // 店铺名称
                    proportion: '7.48',  // 环比
                    up_or_down: 'up',  // 升或降, up为升 down为降
                },
                {
                    store_id: '120',
                    store_name: '武汉周黑鸭', // 店铺名称
                    proportion: '7.48',  // 环比
                    up_or_down: 'up',  // 升或降, up为升 down为降
                },
            ]  
        
        }


    }
}



module.exports = function() {

    var obj = generateObj()

    for(var key in obj) {
        obj[key]  = {
            error: 0,
            msg: '',
            data: obj[key] 
        }
    }
    return obj
}
