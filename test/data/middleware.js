var mockData = require('./mockdata')()

var opResponse = {
    error: 0,
    msg: ''
}

function handleEmployee(req, res, next) {
    var retData , tmp 
    switch( req.query.action ) {
        case 'card' : 
            return res.send( mockData.aresCard ) 

        case 'myScores' : 
            return res.send( mockData.aresScore ) 

        case 'myStores' : 
            retData = clone( mockData.aresStores ) 
            
            if( req.query.type === 'top' ) {
                tmp = 'up'
            } else {
                tmp = 'down'
            }
            retData.data.stores.forEach(function(item){
                item.up_or_down = tmp 
            })
            return res.send( retData ) 
        default: 
            return next()
    }
}
function handleArticle (req, res, next) {
    var retData , tmp 
    switch( req.query.action ) {
        case 'menus' : 
            return res.send( mockData.menus ) 

        case 'lists' : 

            if( req.query.type === 'recommended' ) {
                if( req.query.cate_id === 'relatedHardwareM' ) {
                    retData = clone( mockData.recommendGoods ) 
                } else if ( req.query.cate_id === 'peerCompanyStateM' ) {
                    retData = clone( mockData.noArticles ) 
                } else {
                    retData = clone( mockData.allArticles) 
                } 
            } else if ( req.query.type === 'all'  ) {
                if( parseInt(req.query.page ) < 4 ) {
                    retData = clone( mockData.allArticles ) 
                } else {
                    retData = clone( mockData.allArticles ) 
                    // 返回为数组
                    retData.data.articles = []
                }
            }

            retData.data.cate_id = req.query.cate_id
            res.send( retData ) 
            return 

        case 'view' : 
            retData = clone( mockData.articleDetail ) 
            retData.data.article_id = req.query.article_id
            return res.send( retData ) 

        case 'listByTags' : 
            res.send( mockData.recommendArticle ) 
            return 

        default: 
            return next()
    }
}



module.exports = function (req, res, next) {
    switch( req.query.controller ) {
        case 'employee' : 
            return handleEmployee.apply(null, arguments)
        case 'article' : 
            return handleArticle.apply(null, arguments)
    }

    return next()
}







// 复制函数  用于复制对象
function clone(obj) {
    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) 
        return obj;
    
    // Handle Date
    if (obj instanceof Date) {
        var copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        var copy = [];
        for (var i = 0, len = obj.length; i < len; ++i) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        var copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
        }
        return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
}
