
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
            gApi.ares = data.data; 

            mv.transformData( data.data  )
            apiStatus.ares = true
            shouldRender()
            
        }
    })

    urlObj.action =  'myScores'

    $.getJSON( url, urlObj , function(data){
        if(data.error == 0){
            gApi.aresScore = data.data; 
            mv.scoreData = data.data
            apiStatus.score = true
            shouldRender()
        }
    })

    function shouldRender(){
        if( apiStatus.ares && apiStatus.score )  {
            mv.render() 
            dispatchGetApiEvent('aresScore');
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



AresScore.prototype.afterRender = function(){
    $('.circle').each(function(index, el) {
        var num = $(this).find('span').text() * 3.6;
        if (num>=180) {
            $(this).find('.left').css(circleRotate(num));
        } else {
            $(this).find('.left').css(circleRotate(180));
            $(this).find('.right').css(circleRotate(num-180));
        };
    });

    function circleRotate(num){
        return {
            "-webkit-transform": "rotate("+num+"deg)",
            "-moz-transform": "rotate("+num+"deg)",
            "-ms-transform": "rotate("+num+"deg)",
            "transform": "rotate("+num+"deg)",
            "-webkit-transition": "all .4s linear",
            "-ms-transition": "all .4s linear",
            "transition": "all .4s linear",
        }
    }
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
    data.url_query = window.location.search; 

    //var html = template('aresScore', data);
    var html = aresScoreTpl ( data );
    document.getElementById('center').innerHTML = html;

    this.afterRender()
    
}

function aresScoreRouteEntry (){
    console.log('aresScoreRouteEntry')
    if( ! gData.aresScore ) {
        gData.aresScore =  new AresScore(gPartner_id, gEmployee_sn)
    }
    gData.aresScore.init()
}

module.exports = aresScoreRouteEntry 
