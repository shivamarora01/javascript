function performAsyncOper(callback){
    fetch(`https://api.github.com/users/shivamarora01`)
    .then((res)=>res.json())
    .then((res)=>{
        //Callback is outputting at last because cb is registered but callstack GLOBAL EXECUTION CONTEXT IS NOT BLANK
        callback(res)
        console.log("Done2")
    })
    .then((res)=>{
        console.log("Done3")
    })
    .catch((err)=>{
        console.log("Error")
    })
    console.log("Done")
}
function Handler(result){
   setTimeout(function inter(){
    console.log(result.login);
   },1000)
}
performAsyncOper(Handler);