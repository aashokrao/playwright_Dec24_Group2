//Delcare constant variable and assign value as true/false
//const data=false;


//Callback function to resolve/reject the promise
function fetchDataFromDatabase(inputData){    
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(inputData){
                resolve("Data fetched successfully");
            }else{
                reject("Data not found!");
            }
        }, 2000);
    })
}

//function to call callback function
function fetchData(dataFetch,data){
    dataFetch(data).then((m)=>console.log(m))
    .catch((e)=>console.log(e))
}

//calling normal function with value true
fetchData(fetchDataFromDatabase,true);
//calling normal function with value false
fetchData(fetchDataFromDatabase,false);