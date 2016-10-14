
var panelTpl = require('../../tpl/articles/panel.html')
var menuTpl = require('../../tpl/articles/menu.html')
var noArticleTpl = require('../../tpl/articles/noArticleMessage.html')


var data = {
	button: null,
	sections: [],
	articles: null,
    keyboardUrl: gKeyboardUrl, 
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

	$("html").click(hideMenuItem);
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

	}
}

function renderMenus(){
	if(data.button){
		//var html = template("menu", data);
		var html = menuTpl ( data);
		$("#container").html(html);
		init();
	}
}


function getMenus(){
    var url =  URL_PREFIX + '/index.php' 
    var _data = { 
        controller: 'article',
        action: 'menus',
        partner_id: gPartner_id, 
        employee_sn : gEmployee_sn ,
    }

	// 获取底部菜单
	$.ajax({
		type: 'GET',
		url: url,
		dataType: 'json',
        data: _data,
		success: function(res){
			if(res.error == 0){
				data.button = res.data.button;
				renderMenus();
			}
		}
	});
}

var gFirstEnter = true 

function menuRouteEntry(){
	$("#view-page").html('<div class="m-content" id="js-m-content"></div><div id="container"></div>');

    if( gFirstEnter ) {
        // 默认推送
        getArticles("0", "默认");
        getMenus();
        gFirstEnter = false 

    } else {
        renderMenus();
        renderArticles();
    }


}






module.exports = menuRouteEntry;





