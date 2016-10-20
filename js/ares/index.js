
var aresRouteEntry = require('./ares')
var aresScoreRouteEntry  = require('./aresScore')
var aresStoreRouteEntry = require('./aresStore')


$(function() {
    FastClick.attach(document.body);
});

try{
    // 路由配置
    var routes = {
        ares: aresRouteEntry,
        aresScore: aresScoreRouteEntry,
        aresStore: aresStoreRouteEntry,
    }

    var router = Router(routes);
    router.init(['/ares']);

} catch(e) {
    alert(e.message + '  ' + e.stack) 
}
