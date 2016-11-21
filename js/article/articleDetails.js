var articleDetailsTpl = require('../../tpl/articles/articleDetails.html')
var articleRecommendTpl  = require('../../tpl/articles/articleRecommend.html')

function articleDetailsRouterEntry(id){
    gApi.curPage = 'detail';

	$(window).scrollTop(0);
    var url =  URL_PREFIX + '/index.php' 
    var _detailData = { 
        controller: 'article',
        action: 'view',
        article_id: id, 
    }

	$.ajax({
		type: "GET",
		url: url,
		dataType: "json",
		data: _detailData,
		success: function(data){
			if(data.error == 0){
				console.dir(data.data);
				//var html = template("articleDetails", data.data);
                gApi.detail = data.data;
				var html = articleDetailsTpl(data.data);
				$("#view-page").html(html);
			}
		}
	});	

    //var _recommendData = { 
        //controller: 'article',
        //action: 'listByTags',
    //}
	//$.ajax({
		//type: "GET",
		//url: url,
		//dataType: "json",
		//data: _recommendData,
		//success: function(data){
			//if(data.error == 0){
				//console.dir(data.data);
				//var html = articleRecommendTpl(data.data);
				//$("#view-page").append(html);
			//}
		//}
	//});
}

module.exports = articleDetailsRouterEntry;
