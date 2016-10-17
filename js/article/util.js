function goToItem(elem){
    var type = $(elem).data("type")
    var id, key 
    var href 
    switch(type) {
        case 'article':  
            id = $(elem).data("id");
            href ='#/articleDetails/'  + id;
            break
        case 'link': 
            link = $(elem).data("link")
            href = link;
            break
        default:
            return 
    }
    window.location.href = href;
}




module.exports = {
    goToItem: goToItem,
} 
