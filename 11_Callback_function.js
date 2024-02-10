function performAsyncOper(callback){
    setTimeout(function(){
        //result can be the data coming from async operations
        const result = "Async Handler executed"
        callback(result)
    },1000)
}

function HandlerCallback(result){
    console.log(result);
}

performAsyncOper(HandlerCallback)

