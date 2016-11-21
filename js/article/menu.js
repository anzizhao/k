
var panelTpl = require('../../tpl/articles/panel.html')
var menuTpl = require('../../tpl/articles/menu.html')
var noArticleTpl = require('../../tpl/articles/noArticleMessage.html')

var goToItem = require('./util').goToItem;
var makeAresUrl = require('../utils').makeAresUrl

var data = {
	button: null,
	sections: [],
	articles: null,
    //keyboardUrl: gKeyboardUrl, 
}




function init(){

	// 底部菜单
	$(".m-footer-nav .item").click(function(e){
		e.stopPropagation();
		$(this).children("div").show();
		$(this).siblings(".item").children("div").hide();
	});

	// 底部 子菜单
	$(".sub-btn-list li").click(function(e){
		e.stopPropagation();
		hideMenuItem();

		//var key = $(this).attr("data-key");
		var type = $(this).data("type");
        var key, url, name;
        switch( type ) {
            case 'click' : 
                key = $(this).data("key");
                name= $(this).data("name");
                getArticles(key, name);
                break
            case 'view' : 
                url = $(this).data("url");
                window.location.href = url;
                break
        }
	})

    function hideMenuItem(){
        $(".m-footer-nav .item").children("div").hide();
    }

	$("body").click(hideMenuItem);
}


function getArticles(key, menuName){
    var url =  URL_PREFIX + '/index.php' 
    var _data = { 
        cate_id: key, 
        type: 'recommended',
        controller: 'article',
        action: 'lists',
    }
	$.ajax({
		type: 'GET',
		url: url,
		dataType: 'json',
		data: _data,
		success: function(res){
			if(res.error == 0){
				//data.sections.push( { articles: res.data.articles } )
                res.data.menuName = menuName; 
                data.sections.push( res.data  )
                renderArticles();

			}
		}
	});	
}


function renderArticles(){
	if(data.sections.length ){
		var html = ''
		data.sections.forEach(function(item){
			//html += template("panel", item)
            //TODO articles 为空数组
            if( item.articles &&  item.articles.length ) {
                html += panelTpl(item)
            } else {
                html += noArticleTpl ({ menuName: item.menuName })
            }
		})
		$(".m-content").html(html);
		$(window).scrollTop(document.documentElement.scrollHeight);

        // 跳转到全部的路由 
        $(".m-panel-btn-tatal").click(function(e){
            e.stopPropagation();
            var key = $(this).data("key")
            gRouter.setRoute('articleList/'+key)
        });

        $(".m-panel-main-article").on('click','.first-item', function(e){
            e.stopPropagation();
            goToItem( this )
        });
        $(".m-panel-article-list").on('click','li>a', function(e){
            e.stopPropagation();
            goToItem( this )
        });
	}



}

var status = {
    getAresInfo: false,
    getMenus: false,
};

function renderMenus(){
	if(data.button){
		//var html = template("menu", data);
        data.keyboardUrl = gKeyboardUrl; 
		var html = menuTpl ( data);
		$("#container").html(html);
		init();
	}
}
function shouldRenderMenus(){
    if( status.getMenus && status.getAresInfo) {
        renderMenus() 
    }
}
function getAresInfo (id, sn){
    var url = URL_PREFIX + '/index.php';
    var urlObj = {
        partner_id: id, 
        employee_sn : sn,
        controller: 'employee', 
        action: 'card'
    }
    status.getAresInfo = false;
    $.getJSON( url, urlObj, function(data){
        if(data.error == 0){
            status.getAresInfo = true;
            // 组合url
            gKeyboardUrl = makeAresUrl(gKeyboardUrl, data.data) ;
            shouldRenderMenus();
        }
    })
}

function getMenus(){
    var url =  URL_PREFIX + '/index.php' 
    var _data = { 
        controller: 'article',
        action: 'menus',
        partner_id: gPartner_id, 
        employee_sn : gEmployee_sn ,
    }

    status.getMenus = false;
	// 获取底部菜单
	$.ajax({
		type: 'GET',
		url: url,
		dataType: 'json',
        data: _data,
		success: function(res){
			if(res.error == 0){
                status.getMenus = true;
				data.button = res.data.button;
                shouldRenderMenus();

                dispatchGetApiEvent('menu');
			}
		}
	});
}

var gFirstEnter = true ;

function menuRouteEntry(){
	$("#view-page").html('<div class="m-content" id="js-m-content"></div><div id="container"></div>');


    gApi.curPage = 'menu';

    if( gFirstEnter ) {
        // 默认推送
        getArticles("0", "默认");
        getMenus();
        getAresInfo(gPartner_id, gEmployee_sn);
        gFirstEnter = false 

    } else {
        renderMenus();
        renderArticles();
    }


}






module.exports = menuRouteEntry;





