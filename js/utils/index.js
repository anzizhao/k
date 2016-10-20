function makeAresUrl(baseUrl, data) {
    //whoamiUrl 
    var encodeAvatar = encodeURIComponent( data.employee_avatar )
    var encodeName = encodeURIComponent( data.employee_name)
    var encodePartnerName = encodeURIComponent( data.partner_name )
    return  ( baseUrl  
    +  '?id='  + data.partner_id  
    + '&sn='  + data.employee_sn  
    + '&name='  + encodeName  
    + '&team=' + encodePartnerName 
    + '&avatar=' + encodeAvatar );
}
module.exports = {
    makeAresUrl: makeAresUrl,
} 
