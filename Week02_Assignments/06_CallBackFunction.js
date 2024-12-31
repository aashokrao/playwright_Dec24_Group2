let browser ="chrome";

// Call back function
function callBackFn(inputBrowser){
    setTimeout(() => {
        console.log("Browser version using callBack : "+inputBrowser);
    }, 2000);   
}

//Function accepts callBack function name as arguement and calling call back function
function checkBrowserVersion(callBackFnCall){
    //Calling the callBack function by passing the global variable as arguement
    callBackFnCall(browser);
}
//Call the function with callbackfunction as parameter
checkBrowserVersion(callBackFn)
console.log("Callback function call to get browserName")
