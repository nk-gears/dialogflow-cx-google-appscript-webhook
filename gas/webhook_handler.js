
const webHookHandler = (params) => {
  console.log(JSON.stringify(params));
  let hc=HandlerClient;

  let tag = params.fulfillmentInfo.tag;
  let sessionInfo=params.sessionInfo || {};
  let pageParameterInfo={}; //params.pageInfo.formInfo.parameterInfo;
  let context={sessionInfo,tag,pageInfo:pageParameterInfo};

  let config={lang:params.languageCode};
  hc.init(config);
 
  let response={"fulfillment_response": { "messages": []}};

    if (!!tag) {
        switch (tag) {
            
          //Fullfillment Sample

          case 'welcome':
            response=createFullfillment(["Welcome."]);
            response=addMessage(response,"Ask me anything");
            break;
            
          // Initializing value in Session params  
          case 'my-profile':
            const userInfo=hc.getUserInfo(sessionInfo.parameters);
            response={sessionInfo:{ parameters:{...userInfo }}};
             break;
           default:
             break;
           
        }
       return response;
    }

}
