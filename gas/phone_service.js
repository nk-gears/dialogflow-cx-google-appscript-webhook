
var PhoneService = (function(ns) {
  
  ns.config={};
  
  ns.init = function(config) {
    this.config=config;
    
  }
  
  ns.getPhoneInfo = function(phoneNumber){
    let lineType=""
    try{
      const actualUrl=appConfig.PHONE_SERVICE_API.replace("#NUM#",phoneNumber);
      var response = UrlFetchApp.fetch(actualUrl);
       var responseText=response.getContentText();
       const jsonResponse = JSON.parse(response);
       lineType=jsonResponse.line_type;
    }catch{
      
    }
     return lineType;
  }
  
     
  return ns;
  
})(PhoneService || {});

  
function testPhoneNum(){
    Logger.log(PhoneService.getPhoneInfo("501718360"));
}