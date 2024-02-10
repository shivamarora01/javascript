function performAsyncOper(){
    setTimeout(function(){
        //result can be the data coming from async operations
        const result = "Async Handler executed"
        console.log(result);
        console.log("Hi2")
    },0)
}
performAsyncOper()
console.log("Hi")