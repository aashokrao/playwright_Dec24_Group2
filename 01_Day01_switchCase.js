
function runTest(testType){
    switch (testType){
        case "smoke":
            console.log("Executing smoke test")
            break;
        case "regression":
            console.log("Executing Regression test")
            break;
        default:
            console.log("Please enter valid test type")
    }
}
runTest("smoke")
runTest("regression")
runTest("sanity")
