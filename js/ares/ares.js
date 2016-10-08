
var aresTpl = require('../../tpl/ares/ares.html')

function Ares(partnerId, employeeSn){
    this.id = partnerId;
    this.sn = employeeSn;
    this.data = null
}

Ares.prototype.init = function(){
    if( ! this.data ) {
        this.getData()        
    } else {
        this.render() 
    }
}


Ares.prototype.getData = function(){
    var url = URL_PREFIX + '/index.php';
    var urlObj = {
        partner_id: this.id, 
        employee_sn : this.sn,
        controller: 'employee', 
        action: 'card'
    }
    var mv = this
    $.getJSON( url, urlObj, function(data){
        if(data.error == 0){
            mv.transformData( data.data  )
            mv.render() 
        }
    })
}

Ares.prototype.transformData = function(data){
    data.stars = [] 
    var i 
    for(i=0; i<data.star_num; i++) {
        data.stars.push(i) 
    }
    this.data = data
}

Ares.prototype.render = function(){
    if (!this.data ) {
        return  
    }
    //var html = template('ares', this.data  );
    var html = aresTpl ( this.data );
    document.getElementById('center').innerHTML = html;
}


function aresRouteEntry (){
    if( ! gData.ares ) {
        gData.ares =  new Ares(gPartner_id, gEmployee_sn)
    }
    gData.ares.init()
}

module.exports = aresRouteEntry
