var articleListTpl = require('../../tpl/articles/articleList.html');

var articleListListTpl = require('../../tpl/articles/articleListList.html');

var InfiniteScroll = require('./infiniteScroll');

var goToItem = require('./util').goToItem;

function ArticleList (key){
    this.key = key
    this.firstRender = true 
    this.totalData = null // 获取的总数据
    this.data = null   // 一次获取的数据
    this.curPage = 0
}


ArticleList.prototype.getKey = function(){
    return this.key
}

ArticleList.prototype.init = function(){
    this.firstRender = true 


    if( ! this.data ) {
        this.getMoreData()        
    } else {
        this.render() 
    }
}

ArticleList.prototype.getData = function(page, _limit){
    var url = URL_PREFIX + '/index.php';
    var limit = _limit || 10

    var urlObj = {
        cate_id: this.key,
        type: 'all',
        controller: 'article', 
        action: 'lists',
        page: page, 
        limit: limit,
    }
    var mv = this
    $.getJSON( url, urlObj, function(data){
        if(data.error !== 0){
            return 
        }
        gApi.list = data.data; 
        if( data.data && data.data.articles && data.data.articles.length ) {
            mv.transformData( data.data  )
            mv.render() 
        } else {
            //没有更多的数据 
            $('.no-data-msg').show()
            mv.unBindScroll()
        }
    })
}

ArticleList.prototype.transformData = function(data){
    this.data = data
}

ArticleList.prototype.bindScroll = function(){
    this.infinitScroll = new InfiniteScroll('.l-list-bottom', this.getMoreData.bind(this) )
    this.infinitScroll.bind()
}

ArticleList.prototype.unBindScroll = function(){
    if( this.infinitScroll ) {
        this.infinitScroll.unBind()
        this.infinitScroll = null 
    }
}

ArticleList.prototype.render = function(){
    if (!this.data ) {
        return  
    }
    var html 
    if( this.firstRender ) {
       this.totalData = this.data 
       html = articleListTpl ( this.data );
       $("#view-page").html(html);

       this.firstRender = false
       this.bindScroll()

       $(".l-artcle-list").on('click','li>a', function(e){
           e.stopPropagation();
           goToItem( this );
       });

    } else {
        html = articleListListTpl ( this.data );
        $(".l-artcle-list").append(html);

        this.totalData.articles = this.totalData.articles.concat( this.data ) 
    }

    // after render 

}


ArticleList.prototype.getMoreData = function(){
    this.getData( this.curPage )        
    this.curPage ++
}

function articleListRouteEntry (key){
    // key 为null  跳转的到menu页
    if( ! key ) {
        gRouter.setRoute('/menu')
        return  
    }
    gApi.curPage = 'list';
    if( ! gData.articleList || gData.articleList.getKey() !== key ) {
        gData.articleList =  new ArticleList(key)
    } 

    gData.articleList.init()

}

module.exports = articleListRouteEntry 
