//Main Entry Point for the Webhook


function doPost(request = {}) {
  
  try{
  const { parameter, postData: { contents, type } = {} } = request;
  const { source } = parameter;

  if (type === 'application/json') {
    const jsonData = JSON.parse(contents);
     //delegate to webhook handler
     const resp= webHookHandler(jsonData);
     const final_resp=JSON.stringify(resp,null, 4);
     return ContentService.createTextOutput(final_resp)
    .setMimeType(ContentService.MimeType.JSON);
  }
  
  }
  catch(ex){
    Logger.log(ex);
  }


}



