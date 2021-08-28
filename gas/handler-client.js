
function testHandlerClient(){
  let hc=HandlerClient;
  hc.init(appConfig);

}; 

var HandlerClient = (function(ns) {
  
  ns.isSandbox =false;
  ns.config={};
  
  ns.init = function(config) {
    this.config=config;
    this.lang=config.lang || "pl";
  }
  
  ns.getUserInfo = function(){
    
    const user={"firstName":"John", "lastName":"Doe"};
    return user;
    
  }
  
  return ns;
  
})(HandlerClient || {});
  
  