const addMessage = (response, msgText, initial = false) => {
    const content = {
        "text": {
            "text": [msgText]
        }
    };
    if (initial) {
        response.fulfillment_response.messages.splice(0, 0, content);
    } else {
        response.fulfillment_response.messages.push(content);
    }
    return response;
}

const createFullfillment = (listItems) => {
    let responses = {"fulfillment_response": {"messages": [] }};
    responses.fulfillment_response.messages = listItems.map(msg => {
        return {
            "text": {
                "text": [
                    msg
                ]
            }
        }

    });
    return responses;
}