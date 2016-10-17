 
var aresStoreTpl = require('../../tpl/ares/aresStore.html')

function AresStore(partnerId, employeeSn){
    this.id = partnerId;
    this.sn = employeeSn;
    this.data = null;
    this.type = 'top';   // 0-top 1-last 
}

AresStore.prototype.TYPE={
    'top':  '我帮助的',
    'last': '需要帮助的'
}; 

AresStore.prototype.hasData = function(){
    return this.data
}

AresStore.prototype.init = function(){
    if( ! this.hasData() ) {
        this.getData()        
    } else {
        this.render() 
    }
}


AresStore.prototype.getData = function(){
    var url = URL_PREFIX + '/index.php';

    var urlObj = {
        controller: 'employee', 
        action: 'myStores',
        partner_id : this.id,
        employee_sn : this.sn,
        type: this.type 
    }

    var mv = this
    $.getJSON( url, urlObj, function(data){
        if(data.error == 0){
            //mv.transformData( data.data  )
            mv.data = data.data
            mv.data._view =  {
                type: mv.TYPE, 
                currentType:  mv.TYPE[ mv.type ]
            }
            mv.render() 
        }
    })
}

AresStore.prototype.transformData = function(data){
}

AresStore.prototype.render = function(){
    if (!this.hasData() ) {
        return  
    }
    var data = this.data
    data.url_query = window.location.search; 

    //var html = template('aresStore', data);
    var html = aresStoreTpl(data);
    document.getElementById('center').innerHTML = html;
    

    var mv = this 
    $(".dropdown").click(function(e){
        e.stopPropagation();
        $('.j-dropdown').hide();
        $(this).next(".j-dropdown").show();
    });

    $('.j-dropdown li').click(function(e){
        e.stopPropagation();
        //$(this).parents(".j-dropdown").prev(".dropdown").text($(this).text());
        //$(this).parents(".dropdown").text( $(this).text() );
        var text =  $(this).text() 
        $('#js-title').text(text);
        $('.j-dropdown').hide();

        if( mv.type !== this.dataset.type ) {
            mv.type = this.dataset.type;
            mv.getData() 
        }
    });

    $(document).click(function(e){
        e.stopPropagation();
        $('.j-dropdown').hide();
    });


}

function aresStoreRouteEntry (){
    if( ! gData.aresStore ) {
        gData.aresStore =  new AresStore(gPartner_id, gEmployee_sn)
    }
    gData.aresStore.init()
}







module.exports = aresStoreRouteEntry;
