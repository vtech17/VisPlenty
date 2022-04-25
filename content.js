console.log("hi")

// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//         console.log(request.message)
//         changeSize(request.message)
//         sendResponse("balls");
//     }
// )


// Listener for background script:
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        // Logging console when received message from content script:
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
        if (request.greeting != null){
            var pp = document.getElementsByTagName("*");
            for (let i = 0; i < pp.length; i++){
                pp[i].style.fontSize = request.greeting.concat("px");
            }
            sendResponse({farewell: "End Transmission"});
        }
    }
);