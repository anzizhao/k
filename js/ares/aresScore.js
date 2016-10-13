
var aresScoreTpl = require('../../tpl/ares/aresScore.html')

function AresScore(partnerId, employeeSn){
    this.id = partnerId;
    this.sn = employeeSn;
    this.aresData = null
    this.scoreData = null
}

AresScore.prototype.hasData = function(){
    return this.aresData && this.scoreData 
}

AresScore.prototype.init = function(){
    if( ! this.hasData() ) {
        this.getData()        
    } else {
        this.render() 
    }
}


AresScore.prototype.getData = function(){
    var url = URL_PREFIX + '/index.php';
    var urlObj = {
        partner_id: this.id, 
        employee_sn : this.sn,
        controller: 'employee', 
        action: 'card'
    }
    var apiStatus = {
        ares: false,
        score: false, 
    }

    var mv = this
    $.getJSON( url, urlObj , function(data){
        if(data.error == 0){
            mv.transformData( data.data  )
            apiStatus.ares = true
            shouldRender()
        }
    })

    urlObj.action =  'myScores'

    $.getJSON( url, urlObj , function(data){
        if(data.error == 0){
            mv.scoreData = data.data
            apiStatus.score = true
            shouldRender()
        }
    })

    function shouldRender(){
        if( apiStatus.ares && apiStatus.score )  {
            mv.render() 
        }
    }
}

AresScore.prototype.transformData = function(data){
    data.stars = [] 
    var i 
    for(i=0; i<data.star_num; i++) {
        data.stars.push(i) 
    }
    this.aresData = data
}

AresScore.prototype.render = function(){
    if (!this.hasData() ) {
        return  
    }
    var data = {}
    var key 
    for( key in this.aresData ) {
        data[key] = this.aresData[key]
    }
    for( key in this.scoreData ) {
        data[key] = this.scoreData[key]
    }

    //var html = template('aresScore', data);
    var html = aresScoreTpl ( data );
    document.getElementById('center').innerHTML = html;
}

function aresScoreRouteEntry (){
    console.log('aresScoreRouteEntry')
    if( ! gData.aresScore ) {
        gData.aresScore =  new AresScore(gPartner_id, gEmployee_sn)
    }
    gData.aresScore.init()
}

module.exports = aresScoreRouteEntry 
